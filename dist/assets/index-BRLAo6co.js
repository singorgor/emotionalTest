import{d as Ce,a as F,r as U,c as g,b as e,e as O,f as P,u as Z,o as p,g as A,t as u,n as G,F as I,h as L,i as S,w as $e,j as K,k as ke,l as ae,m as D,p as J,q as re,T as le,s as Se,v as de,x as Be,y as Te,z as Ae,A as qe,B as Qe,C as Ie}from"./vendor-L23DVYXt.js";import{_ as De}from"./pdf-D7HrI6pR.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const v of a.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const h={A:{title:"整体疲惫强度评估",description:"用来判断你到底有多累，不区分场景、不谈来源。",questions:[{id:"A1",text:"最近一段时间，我早上醒来时，经常觉得自己根本没有真正休息好。",category:"fatigue_intensity"},{id:"A2",text:"明明睡眠时间差不多，但整个人总是提不起精神、像手机电量一直不满格。",category:"fatigue_intensity"},{id:"A3",text:"一天下来，我会觉得脑子被掏空，哪怕什么都不做也很难真正放松。",category:"fatigue_intensity"},{id:"A4",text:"最近，我很容易对小事失去耐心，情绪一下子就被点燃或拉低。",category:"fatigue_intensity"},{id:"A5",text:"我经常需要强迫自己去完成本来应该轻松完成的事情。",category:"fatigue_intensity"},{id:"A6",text:"我常常会有一种说不出原因的心累，明明没有发生什么大事，却总觉得压得喘不过气。",category:"fatigue_intensity"},{id:"A7",text:"最近，我的注意力很难集中，看东西、开会或聊天都会不自觉走神。",category:"fatigue_intensity"},{id:"A8",text:"即使有空闲时间，我也很难真正投入一件事，总有一种怎么都休息不够的感觉。",category:"fatigue_intensity"}]},B:{title:"疲惫场景 / 掉血地图",description:"回答你主要是在哪些场景被榨干",subcategories:{work:{title:"工作 / 学习压力",description:"评估你在工作和学习场景中的消耗程度",questions:[{id:"B1",text:"面对工作 / 学习任务时，我经常有一种怎么追也追不完的焦虑感。",category:"work"},{id:"B2",text:"我常常担心自己在工作 / 学习上的表现不够好，会被否定或被淘汰。",category:"work"},{id:"B3",text:"即使已经很累了，我还是会不自觉地多接一些工作 / 任务，生怕被说不上进。",category:"work"},{id:"B4",text:"最近，我在工作 / 学习中很难找到成就感，更多是为了撑过去、别出事而硬撑。",category:"work"}]},relationship:{title:"人际 / 家庭关系消耗",description:"评估你在人际关系和家庭生活中的消耗程度",questions:[{id:"B5",text:"我会为了不让别人失望或生气，答应很多自己其实不太想做的事。",category:"relationship"},{id:"B6",text:"和家人、伴侣、朋友相处时，我经常在意他们的情绪，生怕自己说错话或做错事。",category:"relationship"},{id:"B7",text:"有时我会觉得自己像情绪垃圾桶，别人把负面情绪倾倒给我后，我还得自己消化。",category:"relationship"},{id:"B8",text:"和身边的人相处后，比起轻松，我更容易感觉到被消耗、被掏空。",category:"relationship"}]},selfDemand:{title:"自我要求 / 内心压力",description:"评估你对自己的要求程度和内心压力",questions:[{id:"B9",text:"我对自己有很多应该做到的标准，一旦没做到就会强烈自责。",category:"selfDemand"},{id:"B10",text:"当我稍微休息一下或偷个懒时，心里会冒出这样很没用、很浪费时间的声音。",category:"selfDemand"},{id:"B11",text:"我很难接受自己状态不好或者表现一般，总觉得自己应该能再好一点。",category:"selfDemand"},{id:"B12",text:"即使周围人已经觉得我做得够多了，我自己仍然觉得不够、不够、不够。",category:"selfDemand"}]}}},C:{title:"疲惫来源类型",description:"了解你疲惫的主要来源和类型特征",subtypes:{emotional_overload:{title:"情绪过载型",description:"高敏感、高共情，容易情绪过载",questions:[{id:"C1",text:"周围人的情绪变化（比如语气微妙变化、表情不对）很容易被我捕捉到，也会影响我一整天的心情。",category:"emotional_overload"},{id:"C2",text:"别人遇到困难或心情不好时，我会下意识把他们的感受揽到自己身上，替对方着急、替对方难受。",category:"emotional_overload"},{id:"C3",text:"即使事情已经过去了，我还是会反复回想当时的对话和细节，揣测自己有没有哪里做得不好。",category:"emotional_overload"},{id:"C4",text:"面对冲突或不开心的场面时，我比一般人更容易紧张、心慌，很想赶紧把气氛修好。",category:"emotional_overload"}]},responsibility_trap:{title:"责任绑架型",description:"习惯扛责，难以说不",questions:[{id:"C5",text:"很多时候我会觉得：这件事如果我不管，就会出问题，于是明明很累也会硬着头皮上。",category:"responsibility_trap"},{id:"C6",text:"当我拒绝别人、说不方便或不行时，会感到强烈的愧疚，好像自己是个自私的人。",category:"responsibility_trap"},{id:"C7",text:"我经常接手别人本可以自己处理的事情，只因为不想麻烦对方或不想看他们手忙脚乱。",category:"responsibility_trap"},{id:"C8",text:"我习惯在团队 / 家庭里扮演兜底的角色，出事先看我、收尾也找我。",category:"responsibility_trap"}]},comparison_anxiety:{title:"对比焦虑型",description:"易受比较刺激，容易对比焦虑",questions:[{id:"C9",text:"刷社交媒体或听到同龄人的近况时，我很容易不自觉地和他们比较，感觉自己落后了。",category:"comparison_anxiety"},{id:"C10",text:"当别人分享自己的成绩、收入或生活时，我表面上很平静，内心却会暗暗给自己很大压力。",category:"comparison_anxiety"},{id:"C11",text:"我常常会给自己设定一些这个年龄应该达到什么水平的目标，一旦没达到就很焦虑。",category:"comparison_anxiety"},{id:"C12",text:"听到别人说谁谁做得很好、谁谁很厉害时，我会立刻联想到自己是不是不够好。",category:"comparison_anxiety"}]},high_pressure_mode:{title:"高压稳定型",description:"习惯高压运转，不敢轻易停下",questions:[{id:"C13",text:"我已经习惯在高强度、高节奏下工作 / 生活，一旦突然闲下来反而会不安。",category:"high_pressure_mode"},{id:"C14",text:"遇到任务或问题时，我的第一反应通常是咬牙撑过去，而不是我能不能先调整一下自己。",category:"high_pressure_mode"},{id:"C15",text:"即使身体已经出现一些疲惫信号（比如失眠、头痛、心悸等），我也会安慰自己再撑一阵就好了。",category:"high_pressure_mode"},{id:"C16",text:"我很难向别人坦白自己累了、扛不住了，总觉得那样会显得自己不够坚强或不够专业。",category:"high_pressure_mode"}]}}},D:{title:"心理韧性 / 抗压能力",description:"评估我面对压力时的心理调节能力和自我修复资源",questions:[{id:"D1",text:"最近一段时间，我整体的睡眠质量还算可以，能在大部分夜晚获得相对完整的休息。",category:"recovery"},{id:"D2",text:"我的生活里有一两个可以真正说心里话的人，和他们聊完会感觉轻松一些。",category:"recovery"},{id:"D3",text:"我偶尔会给自己留出只属于自己、不需要对任何人负责的时间，用来放空或做喜欢的事情。",category:"recovery"},{id:"D4",text:"当我意识到自己真的撑不住时，我有能力也敢于说我需要暂停一下 / 需要帮助。",category:"recovery"}]}},Le=[{value:1,label:"完全不符合",description:"这种描述完全不符合我的情况"},{value:2,label:"偶尔这样",description:"这种描述只是偶尔符合我的情况"},{value:3,label:"一半一半",description:"这种描述有时符合我的情况"},{value:4,label:"经常如此",description:"这种描述经常符合我的情况"},{value:5,label:"非常符合",description:"这种描述非常符合我的情况"}];function oe(){const n=[];return h.A.questions.forEach(i=>n.push(i.id)),Object.values(h.B.subcategories).forEach(i=>{i.questions.forEach(t=>n.push(t.id))}),Object.values(h.C.subtypes).forEach(i=>{i.questions.forEach(t=>n.push(t.id))}),h.D.questions.forEach(i=>n.push(i.id)),n}function X(){return oe().length}const Me={type_emotional_overload:"情绪过载型",type_responsibility_trap:"责任绑架型",type_comparison_anxiety:"对比焦虑型",type_high_pressure_mode:"高压稳定型"},ce={0:"0级 · 情绪稳定区（安全状态）",1:"1级 · 轻度情绪疲劳（预警信号）",2:"2级 · 中度情绪耗竭（需要调整）",3:"3级 · 重度情绪透支（急需干预）",4:"4级 · 极度情绪崩溃（危险状态）"},Pe={low:"心理韧性不足 · 抗压能力较弱",medium:"心理韧性中等 · 具备一定调节能力",high:"心理韧性良好 · 抗压能力强"},Ee={work:"工作/学习",relationship:"人际/家庭",selfDemand:"自我要求/内心压力"};class ue{calculateFatigueResult(i){const t=this.calculateFatigueLevel(i),r=this.calculateSceneScores(i),s=this.calculateTypeMatches(i),a=this.calculateResilienceLevel(i),v=s[0],_=s[1]||s[0],C=this.generatePersonalTags(r,v,a),q=this.createReportProfile(t,v,_,r,a,C);return{fatigueLevel:t,fatigueLabel:ce[t],sceneScores:r,typeMatches:s,primaryType:v,secondaryType:_,recoveryLevel:a,recoveryLabel:Pe[a],personalTags:C,reportProfile:q}}calculateFatigueLevel(i){const r=["A1","A2","A3","A4","A5","A6","A7","A8"].map(a=>i[a]||3),s=r.reduce((a,v)=>a+v,0)/r.length;return s<2?0:s<3?1:s<3.5?2:s<4?3:4}calculateSceneScores(i){const t=["B1","B2","B3","B4"],r=["B5","B6","B7","B8"],s=["B9","B10","B11","B12"],a=this.calculateAverageScore(i,t),v=this.calculateAverageScore(i,r),_=this.calculateAverageScore(i,s);return{work:a,relationship:v,selfDemand:_}}calculateTypeMatches(i){return Object.entries({type_emotional_overload:["C1","C2","C3","C4"],type_responsibility_trap:["C5","C6","C7","C8"],type_comparison_anxiety:["C9","C10","C11","C12"],type_high_pressure_mode:["C13","C14","C15","C16"]}).map(([s,a])=>{const v=this.calculateAverageScore(i,a),_=Math.round((v-1)/4*100);return{code:s,name:Me[s],matchScore:_,avgScore:v}}).sort((s,a)=>a.matchScore-s.matchScore)}calculateResilienceLevel(i){const t=["D1","D2","D3","D4"],r=this.calculateAverageScore(i,t);return r<2.5?"low":r<3.8?"medium":"high"}generatePersonalTags(i,t,r){const s=[];return i.work>=3.2&&s.push("工作/学习耗竭明显"),i.relationship>=3.2&&s.push("人际/家庭消耗明显"),i.selfDemand>=3.2&&s.push("自我要求偏高、容易苛责"),t.code==="type_emotional_overload"?s.push("高敏感、高共情"):t.code==="type_responsibility_trap"?s.push("习惯扛责、难以说不"):t.code==="type_comparison_anxiety"?s.push("容易对比焦虑"):t.code==="type_high_pressure_mode"&&s.push("习惯高压运转"),r==="low"?s.push("心理韧性不足、抗压能力较弱"):r==="medium"?s.push("心理韧性中等、需要加强调节"):s.push("心理韧性良好、具备自我修复能力"),s}createReportProfile(i,t,r,s,a,v){const _=Object.entries(s);_.sort((B,j)=>j[1]-B[1]);const C=_.filter(([B,j])=>j>=2.5).slice(0,2).map(([B])=>B),q={work:this.getSceneIntensity(s.work),relationship:this.getSceneIntensity(s.relationship),selfDemand:this.getSceneIntensity(s.selfDemand)},E=this.identifySpecialPatterns(t,s,a),m=this.selectKeyTags(v,t.code);return{fatigueLevel:i,primaryType:t.code,secondaryType:r.code,recoveryLevel:a,dominantScenes:C,sceneIntensities:q,specialPatterns:E,keyTags:m}}getSceneIntensity(i){return i>=3.5?"high":i>=2.5?"medium":"low"}identifySpecialPatterns(i,t,r){const s=[];return i.code==="type_responsibility_trap"&&t.work>=3.5&&s.push("work扛责者"),i.code==="type_emotional_overload"&&t.relationship>=3.5&&s.push("情绪缓冲垫"),i.code==="type_comparison_anxiety"&&t.selfDemand>=3.5&&s.push("自我驱动焦虑"),i.code==="type_high_pressure_mode"&&r==="low"&&s.push("透支稳定"),s}selectKeyTags(i,t){const s={type_emotional_overload:["sensitivity","emotional_boundary"],type_responsibility_trap:["responsibility","boundary_setting"],type_comparison_anxiety:["comparison","self_acceptance"],type_high_pressure_mode:["pressure","rest_permission"]}[t]||[];return i.forEach(a=>{a.includes("工作")&&s.push("work_stress"),(a.includes("人际")||a.includes("家庭"))&&s.push("relationship_burnout"),a.includes("自我要求")&&s.push("self_criticism"),a.includes("恢复力")&&s.push("recovery")}),[...new Set(s)].slice(0,4)}calculateAverageScore(i,t){if(t.length===0)return 0;const s=t.map(a=>i[a]||3).filter(a=>!isNaN(a)&&a!==null&&a!==void 0);return s.length===0?0:s.reduce((a,v)=>a+v,0)/s.length}}const pe=new ue;function ge(n){return pe.calculateFatigueResult(n)}const je=Object.freeze(Object.defineProperty({__proto__:null,FatigueCalculator:ue,calculateFatigueResult:ge,fatigueCalculator:pe},Symbol.toStringTag,{value:"Module"})),Y=Ce("fatigueTest",{state:()=>({currentStep:"introduction",answers:{},result:null,isCalculating:!1,currentQuestionIndex:0,startTime:null,endTime:null,detailedReport:null}),getters:{progress:n=>{const i=X(),t=Object.keys(n.answers).length;return Math.round(t/i*100)},answeredCount:n=>Object.keys(n.answers).length,totalQuestions:()=>X(),canSubmit:n=>oe().every(t=>n.answers[t]!==void 0),duration:n=>{if(!n.startTime)return null;const i=n.endTime||Date.now();return Math.round((i-n.startTime)/1e3)}},actions:{saveAnswer(n,i){this.answers[n]=i;try{localStorage.setItem("fbi_answers",JSON.stringify(this.answers))}catch(t){console.warn("无法保存答案到本地存储:",t)}},startTest(){this.currentStep="questionnaire",this.startTime=Date.now(),this.currentQuestionIndex=0,this.answers={},this.result=null,this.isCalculating=!1;try{localStorage.removeItem("fbi_answers")}catch(n){console.warn("无法清除本地存储:",n)}},goToResults(){this.currentStep="results"},restart(){this.currentStep="introduction",this.answers={},this.result=null,this.isCalculating=!1,this.currentQuestionIndex=0,this.startTime=null,this.endTime=null,this.detailedReport=null;try{localStorage.removeItem("fbi_answers")}catch(n){console.warn("无法清除本地存储:",n)}},setDetailedReport(n){this.detailedReport=n},async calculateResults(){if(!this.canSubmit)throw new Error("还有题目未完成");this.isCalculating=!0;try{await new Promise(n=>setTimeout(n,1500)),this.result=ge(this.answers),this.endTime=Date.now(),this.goToResults()}catch(n){throw console.error("计算结果失败:",n),n}finally{this.isCalculating=!1}},restoreAnswers(){try{const n=localStorage.getItem("fbi_answers");if(n){const i=JSON.parse(n);this.answers=i}}catch(n){console.warn("无法恢复本地存储的答案:",n)}},exportAnswers(){const n={answers:this.answers,timestamp:new Date().toISOString(),duration:this.duration,version:"1.0.0"};return JSON.stringify(n,null,2)},getModuleProgress(n){const t={A:["A1","A2","A3","A4","A5","A6","A7","A8"],B:["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12"],C:["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16"],D:["D1","D2","D3","D4"]}[n]||[],r=t.filter(v=>this.answers[v]!==void 0).length,s=t.length,a=Math.round(r/s*100);return{completed:r,total:s,percentage:a}},goToQuestion(n){const i=X();n>=0&&n<i&&(this.currentQuestionIndex=n)},nextQuestion(){const n=X();this.currentQuestionIndex<n-1&&this.currentQuestionIndex++},previousQuestion(){this.currentQuestionIndex>0&&this.currentQuestionIndex--},validateAnswers(){const i=oe().filter(a=>this.answers[a]===void 0),t=[],r=Object.values(this.answers);r.length>0&&new Set(r).size===1&&t.push("所有题目都选择了相同的选项，建议重新审视每个题目");const s={A:this.getModuleProgress("A"),B:this.getModuleProgress("B"),C:this.getModuleProgress("C"),D:this.getModuleProgress("D")};return Object.entries(s).forEach(([a,v])=>{v.completed<v.total&&t.push(`${a}模块还有${v.total-v.completed}道题目未完成`)}),{isValid:i.length===0,missingQuestions:i,warnings:t}}}}),Ne={class:"min-h-screen flex items-center justify-center px-4 py-12"},Re={class:"max-w-5xl w-full"},Fe={class:"card p-8 md:p-12 animate-fade-in"},Oe={class:"text-center"},Ve=["disabled"],ze={key:0},We={key:1,class:"loading-dots"},He={key:2,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Ge=F({__name:"Introduction",setup(n){const i=Y(),t=Z(),r=U(!1),s=async()=>{r.value=!0;try{await new Promise(a=>setTimeout(a,500)),i.startTest(),t.push("/questionnaire")}catch(a){console.error("启动测试失败:",a)}finally{r.value=!1}};return(a,v)=>(p(),g("div",Ne,[e("div",Re,[e("div",Fe,[v[2]||(v[2]=O('<div class="text-center mb-8" data-v-721fbef5><h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-v-721fbef5> 情绪疲惫度测试 </h1><div class="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8" data-v-721fbef5></div><p class="text-2xl text-gray-600 text-balance leading-relaxed" data-v-721fbef5> 用 3–5 分钟，看看你现在到底有多&quot;累&quot; </p></div><div class="space-y-6 mb-8" data-v-721fbef5><div class="bg-blue-50 border border-blue-200 rounded-lg p-8" data-v-721fbef5><h2 class="text-xl font-semibold text-blue-900 mb-4" data-v-721fbef5> 🎯 测试说明 </h2><ul class="space-y-3 text-xl text-blue-800" data-v-721fbef5><li class="flex items-start" data-v-721fbef5><span class="text-blue-500 mr-3 text-lg" data-v-721fbef5>•</span><span data-v-721fbef5>这是一个<strong data-v-721fbef5>自我觉察工具</strong>，帮助您了解当前的情绪状态</span></li><li class="flex items-start" data-v-721fbef5><span class="text-blue-500 mr-3 text-lg" data-v-721fbef5>•</span><span data-v-721fbef5>测试包含<strong data-v-721fbef5>40道题目</strong>，预计用时3-5分钟</span></li><li class="flex items-start" data-v-721fbef5><span class="text-blue-500 mr-3 text-lg" data-v-721fbef5>•</span><span data-v-721fbef5><strong data-v-721fbef5>非医疗诊断</strong>，仅为个人参考和自我探索</span></li><li class="flex items-start" data-v-721fbef5><span class="text-blue-500 mr-3 text-lg" data-v-721fbef5>•</span><span data-v-721fbef5>请根据<strong data-v-721fbef5>最近一段时间</strong>的真实感受回答</span></li><li class="flex items-start" data-v-721fbef5><span class="text-blue-500 mr-3 text-lg" data-v-721fbef5>•</span><span data-v-721fbef5>本量表参考情绪耗竭（Emotional Exhaustion）、职业倦怠（Burnout）及主观疲劳相关研究思路编制</span></li></ul></div><div class="bg-green-50 border border-green-200 rounded-lg p-8" data-v-721fbef5><h2 class="text-xl font-semibold text-green-900 mb-4" data-v-721fbef5> ✨ 您将获得 </h2><div class="grid md:grid-cols-2 gap-6 text-xl text-green-800" data-v-721fbef5><div class="flex items-start" data-v-721fbef5><span class="text-green-500 mr-3 text-2xl" data-v-721fbef5>📊</span><div data-v-721fbef5><strong class="text-lg" data-v-721fbef5>疲惫等级评估</strong><p class="text-lg mt-2" data-v-721fbef5>了解您的情绪疲惫程度（0-4级）</p></div></div><div class="flex items-start" data-v-721fbef5><span class="text-green-500 mr-3 text-2xl" data-v-721fbef5>🎯</span><div data-v-721fbef5><strong class="text-lg" data-v-721fbef5>疲惫来源分析</strong><p class="text-lg mt-2" data-v-721fbef5>识别主要的疲惫类型和原因</p></div></div><div class="flex items-start" data-v-721fbef5><span class="text-green-500 mr-3 text-2xl" data-v-721fbef5>🗺️</span><div data-v-721fbef5><strong class="text-lg" data-v-721fbef5>场景掉血地图</strong><p class="text-lg mt-2" data-v-721fbef5>发现哪些场景最消耗您</p></div></div><div class="flex items-start" data-v-721fbef5><span class="text-green-500 mr-3 text-2xl" data-v-721fbef5>🔋</span><div data-v-721fbef5><strong class="text-lg" data-v-721fbef5>心理韧性评估</strong><p class="text-lg mt-2" data-v-721fbef5>评估您的心理调节能力和抗压能力</p></div></div></div></div><div class="bg-orange-50 border border-orange-200 rounded-lg p-8" data-v-721fbef5><h2 class="text-xl font-semibold text-orange-900 mb-4" data-v-721fbef5> 📝 个性化报告 </h2><p class="text-xl text-orange-800 leading-relaxed" data-v-721fbef5> 完成测试后，您将获得一份<strong data-v-721fbef5>高度个性化</strong>的分析报告， 包含详细的类型解读、场景分析、心理韧性评估，以及<strong data-v-721fbef5>针对性的行动建议</strong>。 </p></div></div>',2)),e("div",Oe,[e("button",{onClick:s,disabled:r.value,class:"btn btn-primary text-xl px-12 py-6 inline-flex items-center gap-4 min-h-[72px] text-lg"},[r.value?(p(),g("span",We,"准备中")):(p(),g("span",ze,"开始测试")),r.value?P("",!0):(p(),g("svg",He,[...v[0]||(v[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"},null,-1)])]))],8,Ve),v[1]||(v[1]=e("p",{class:"text-base text-gray-500 mt-6"}," 测试完全匿名，您的答案仅在本地处理 ",-1))])]),v[3]||(v[3]=O('<div class="text-center mt-12" data-v-721fbef5><p class="text-lg text-gray-500" data-v-721fbef5> 适用于：长期处于压力环境的职场人、自由职业者、学生等 </p><p class="mt-3 text-lg text-gray-500" data-v-721fbef5> 特别适合：自我评价为&quot;很累、心累、提不起劲&quot;的人群 </p><div class="mt-6 max-w-5xl mx-auto" data-v-721fbef5><div class="card p-6 bg-amber-50 border-amber-200" data-v-721fbef5><p class="text-amber-700 text-base leading-relaxed" data-v-721fbef5><strong data-v-721fbef5>重要声明：</strong>本量表用于日常自我觉察，不作为医疗或心理诊断依据。如需专业帮助，请咨询合格的心理健康专业人士。 </p></div></div></div>',1))])]))}}),V=(n,i)=>{const t=n.__vccOpts||n;for(const[r,s]of i)t[r]=s;return t},Ke=V(Ge,[["__scopeId","data-v-721fbef5"]]),Je={class:"w-full"},Ue={class:"flex justify-between items-center mb-3"},Ye={class:"text-sm text-gray-500"},Xe={class:"progress-bar"},Ze={class:"flex justify-between items-center mt-3"},et={class:"text-xs text-gray-500"},tt={key:0,class:"text-xs text-gray-500"},st=F({__name:"ProgressBar",props:{answeredCount:{},totalQuestions:{},showEta:{type:Boolean,default:!0}},setup(n){const i=n,t=A(()=>Math.round(i.answeredCount/i.totalQuestions*100)),r=A(()=>{const s=i.totalQuestions-i.answeredCount,a=Math.ceil(s*.5/60);return a>0?a:null});return(s,a)=>(p(),g("div",Je,[e("div",Ue,[a[0]||(a[0]=e("span",{class:"text-sm font-medium text-gray-700"}," 进度 ",-1)),e("span",Ye,u(n.answeredCount)+" / "+u(n.totalQuestions)+" 题 ",1)]),e("div",Xe,[e("div",{class:"progress-fill bg-gradient-to-r from-blue-500 to-blue-600",style:G({width:`${t.value}%`})},null,4)]),e("div",Ze,[e("span",et," 完成度: "+u(t.value)+"% ",1),n.showEta&&r.value?(p(),g("div",tt," 预计剩余: "+u(r.value)+"分钟 ",1)):P("",!0)])]))}}),rt=V(st,[["__scopeId","data-v-8b9d41cb"]]),ot={class:"question-card"},nt={class:"flex items-center justify-between mb-4"},it={class:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"},at={key:0,class:"type-badge secondary text-sm"},lt={class:"mb-8"},dt={class:"text-xl font-semibold text-gray-900 leading-relaxed"},ct={class:"space-y-4"},ut=["onClick","onKeyup","aria-label","aria-pressed","onFocus"],pt=["for","onClick"],gt={class:"flex items-center"},vt={class:"font-semibold text-gray-900 mr-3 text-xl"},bt={class:"text-gray-600 text-lg"},mt=["id","name","value","checked","onChange"],ft={key:0,class:"mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"},xt={class:"text-base text-blue-800"},ht=F({__name:"QuestionItem",props:{question:{},questionNumber:{},modelValue:{},categoryLabel:{},showHelper:{type:Boolean,default:!1}},emits:["update:modelValue","answer-selected","auto-next"],setup(n,{emit:i}){const t=n,r=i,s=A({get:()=>t.modelValue,set:C=>{C!==void 0&&r("update:modelValue",C)}}),a=U(null),v=A(()=>Le),_=C=>{s.value=C,r("answer-selected",t.question.id,C),navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{r("auto-next")},300)};return(C,q)=>{var E;return p(),g("div",ot,[e("div",nt,[e("span",it," 题目 "+u(n.questionNumber),1),n.categoryLabel?(p(),g("span",at,u(n.categoryLabel),1)):P("",!0)]),e("div",lt,[e("h3",dt,u(n.question.text),1)]),e("div",ct,[(p(!0),g(I,null,L(v.value,m=>(p(),g("div",{key:m.value,class:"flex items-center gap-6"},[e("button",{onClick:B=>_(m.value),onKeyup:$e(B=>_(m.value),["enter"]),class:S(["scale-btn",s.value===m.value?"selected":"",a.value===m.value?"ring-2 ring-primary-500 ring-offset-2":""]),"aria-label":`选择${m.label}：${m.description}`,"aria-pressed":s.value===m.value,onFocus:B=>a.value=m.value,onBlur:q[0]||(q[0]=B=>a.value=null)},u(m.value),43,ut),e("label",{for:`question-${n.question.id}-${m.value}`,class:"flex-1 cursor-pointer select-none",onClick:B=>_(m.value)},[e("div",gt,[e("span",vt,u(m.label),1),e("span",bt,u(m.description),1)])],8,pt),e("input",{id:`question-${n.question.id}-${m.value}`,type:"radio",name:`question-${n.question.id}`,value:m.value,checked:s.value===m.value,class:"sr-only",onChange:B=>_(m.value)},null,40,mt)]))),128))]),n.showHelper&&s.value?(p(),g("div",ft,[e("p",xt,' 💡 您选择了"'+u((E=v.value.find(m=>m.value===s.value))==null?void 0:E.label)+'" ',1)])):P("",!0)])}}}),yt=V(ht,[["__scopeId","data-v-fcdaa652"]]),_t={class:"flex items-center justify-between p-4 bg-white border-t border-gray-200"},wt={class:"flex items-center gap-4"},Ct=["disabled"],$t={class:"hidden sm:flex items-center gap-2 text-base text-gray-600"},kt={class:"flex items-center gap-2 overflow-x-auto py-2 px-4 max-w-md"},St=["onClick","title","aria-label"],Bt={class:"flex items-center gap-4"},Tt={key:0,class:"hidden lg:block text-base text-gray-600"},At={class:"font-medium"},qt=["disabled"],Qt=["disabled"],It={class:"sm:hidden border-t border-gray-200 p-4"},Dt={class:"flex items-center justify-between mb-3"},Lt={key:0,class:"grid grid-cols-8 gap-2 p-4 bg-gray-50 rounded-lg"},Mt=["onClick"],Pt=F({__name:"QuestionNavigation",props:{questions:{},currentIndex:{},answers:{}},emits:["go-to-question","go-previous","go-next","submit"],setup(n,{emit:i}){const t=n,r=i,s=Y(),a=U(!1),v=A(()=>t.currentIndex>0),_=A(()=>t.currentIndex<t.questions.length-1),C=A(()=>{const Q=t.questions[t.currentIndex];return t.answers[Q.id]!==void 0}),q=A(()=>s.canSubmit),E=A(()=>t.questions.length),m=A(()=>{const y=t.questions[t.currentIndex].id;let $="",w=[];y.startsWith("A")?($="整体疲惫强度",w=h.A.questions.map(T=>T.id)):y.startsWith("B")?["B1","B2","B3","B4"].includes(y)?($="工作/学习",w=h.B.subcategories.work.questions.map(T=>T.id)):["B5","B6","B7","B8"].includes(y)?($="人际/家庭",w=h.B.subcategories.relationship.questions.map(T=>T.id)):($="自我要求",w=h.B.subcategories.selfDemand.questions.map(T=>T.id)):y.startsWith("C")?($="疲惫来源类型",w=["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16"]):y.startsWith("D")&&($="恢复资源",w=h.D.questions.map(T=>T.id));const N=w.filter(T=>t.answers[T]!==void 0).length;return{name:$,completed:N,total:w.length}}),B=()=>{v.value&&r("go-previous")},j=()=>{_.value&&C.value&&r("go-next")},z=Q=>{a.value=!1,r("go-to-question",Q)},W=Q=>{a.value=!1,r("go-to-question",Q)},H=()=>{q.value&&r("submit")};return(Q,y)=>(p(),g(I,null,[e("div",_t,[e("div",wt,[e("button",{onClick:B,disabled:!v.value,class:S(["btn btn-secondary flex items-center gap-2",{"opacity-50 cursor-not-allowed":!v.value}])},[...y[1]||(y[1]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),K(" 上一题 ",-1)])],10,Ct),e("div",$t,[e("span",null,u(n.currentIndex+1),1),y[2]||(y[2]=e("span",{class:"text-gray-400"},"/",-1)),e("span",null,u(E.value),1)])]),e("div",kt,[(p(!0),g(I,null,L(n.questions,($,w)=>(p(),g("button",{key:$.id,onClick:N=>z(w),class:S(["w-4 h-4 rounded-full flex-shrink-0 transition-all duration-200",w===n.currentIndex?"bg-primary-600 scale-125":n.answers[$.id]!==void 0?"bg-green-500":"bg-gray-300 hover:bg-gray-400"]),title:`题目 ${w+1}${n.answers[$.id]!==void 0?" (已完成)":" (未完成)"}`,"aria-label":`跳转到题目 ${w+1}`},null,10,St))),128))]),e("div",Bt,[m.value?(p(),g("div",Tt,[e("span",null,u(m.value.name)+": ",1),e("span",At,u(m.value.completed)+"/"+u(m.value.total),1)])):P("",!0),_.value?(p(),g("button",{key:1,onClick:j,disabled:!C.value,class:S(["btn btn-primary flex items-center gap-2",{"opacity-50 cursor-not-allowed":!C.value}])},[...y[3]||(y[3]=[K(" 下一题 ",-1),e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])],10,qt)):(p(),g("button",{key:2,onClick:H,disabled:!q.value,class:S(["btn btn-primary flex items-center gap-2",{"opacity-50 cursor-not-allowed":!q.value}])},[...y[4]||(y[4]=[e("span",null,"提交测试",-1),e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)])],10,Qt))])]),e("div",It,[e("div",Dt,[y[6]||(y[6]=e("span",{class:"text-base text-gray-600"},"快速跳转",-1)),e("button",{onClick:y[0]||(y[0]=$=>a.value=!a.value),class:"text-primary-600 text-base flex items-center gap-1"},[K(u(n.currentIndex+1)+" / "+u(E.value)+" ",1),(p(),g("svg",{class:S(["w-4 h-4",{"rotate-180":a.value}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...y[5]||(y[5]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))])]),a.value?(p(),g("div",Lt,[(p(!0),g(I,null,L(n.questions,($,w)=>(p(),g("button",{key:$.id,onClick:N=>W(w),class:S(["w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center",w===n.currentIndex?"bg-primary-600 text-white":n.answers[$.id]!==void 0?"bg-green-500 text-white":"bg-white border border-gray-300 text-gray-600"])},u(w+1),11,Mt))),128))])):P("",!0)])],64))}}),Et=V(Pt,[["__scopeId","data-v-1b1173fb"]]),jt={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"},Nt={class:"bg-white shadow-sm border-b border-gray-200"},Rt={class:"max-w-4xl mx-auto px-4 py-6"},Ft={class:"flex items-center justify-between"},Ot={class:"text-right"},Vt={class:"text-2xl font-bold text-primary-600"},zt={class:"mt-4"},Wt={class:"max-w-4xl mx-auto px-4 py-8"},Ht={key:0,class:"text-center mb-8 animate-fade-in"},Gt={class:"text-xl font-semibold text-gray-900 mb-2"},Kt={class:"text-gray-600"},Jt={class:"max-w-4xl mx-auto"},Ut={key:1,class:"card p-12 text-center"},Yt={class:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg"},Xt={class:"bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-slide-up"},Zt={class:"mb-6"},es={class:"bg-blue-50 border border-blue-200 rounded-lg p-4"},ts={class:"space-y-2 text-sm text-blue-800"},ss={class:"flex justify-between"},rs={class:"font-medium"},os={class:"flex justify-between"},ns={class:"font-medium"},is={key:0,class:"mt-4"},as={class:"bg-yellow-50 border border-yellow-200 rounded-lg p-4"},ls={class:"space-y-1 text-sm text-yellow-800"},ds={class:"flex gap-3"},cs=["disabled"],us={key:0},ps={key:1,class:"loading-dots"},gs={key:1,class:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"},vs=F({__name:"Questionnaire",setup(n){const i=Z(),t=Y(),r=U(!1),s=U(!1),a=A(()=>{const d=[];return d.push(...h.A.questions),d.push(...h.B.subcategories.work.questions),d.push(...h.B.subcategories.relationship.questions),d.push(...h.B.subcategories.selfDemand.questions),d.push(...h.C.subtypes.emotional_overload.questions),d.push(...h.C.subtypes.responsibility_trap.questions),d.push(...h.C.subtypes.comparison_anxiety.questions),d.push(...h.C.subtypes.high_pressure_mode.questions),d.push(...h.D.questions),d}),v=A(()=>a.value[t.currentQuestionIndex]),_=A(()=>{const d=a.value[t.currentQuestionIndex];if(!d)return null;const l=d.id;return l.startsWith("A")?{title:h.A.title,description:h.A.description}:l.startsWith("B")?{title:h.B.title,description:h.B.description}:l.startsWith("C")?{title:h.C.title,description:h.C.description}:l.startsWith("D")?{title:h.D.title,description:h.D.description}:null}),C=A(()=>t.validateAnswers()),q=d=>{const l=d.id;if(l.startsWith("A"))return"整体疲惫强度";if(l.startsWith("B")){if(["B1","B2","B3","B4"].includes(l))return"工作/学习";if(["B5","B6","B7","B8"].includes(l))return"人际/家庭";if(["B9","B10","B11","B12"].includes(l))return"自我要求"}else if(l.startsWith("C")){if(["C1","C2","C3","C4"].includes(l))return"情绪过载型";if(["C5","C6","C7","C8"].includes(l))return"责任绑架型";if(["C9","C10","C11","C12"].includes(l))return"对比焦虑型";if(["C13","C14","C15","C16"].includes(l))return"高压稳定型"}else if(l.startsWith("D"))return"心理韧性";return""},E=d=>{v.value&&t.saveAnswer(v.value.id,d)},m=(d,l)=>{console.log(`Question ${d} answered with score ${l}`)},B=()=>{t.currentQuestionIndex<a.value.length-1?t.nextQuestion():console.log("已是最后一题，等待用户提交")},j=d=>{t.goToQuestion(d)},z=()=>{t.previousQuestion()},W=()=>{t.nextQuestion()},H=()=>{t.canSubmit&&(s.value=!0)},Q=async()=>{r.value=!0,s.value=!1;try{if(!t.canSubmit)throw new Error("还有题目未完成");t.isCalculating=!0,await new Promise(l=>setTimeout(l,1500));const{calculateFatigueResult:d}=await De(async()=>{const{calculateFatigueResult:l}=await Promise.resolve().then(()=>je);return{calculateFatigueResult:l}},void 0);t.result=d(t.answers),t.endTime=Date.now(),await y(),r.value=!1,t.isCalculating=!1,console.log("报告生成完成，准备跳转到结果页面"),i.push("/results")}catch(d){console.error("提交测试失败:",d),r.value=!1,t.isCalculating=!1}},y=async()=>{if(console.log("开始生成详细报告..."),t.result){console.log("测试结果存在，开始生成报告内容");const d=$(t.result,t.duration);console.log("报告内容生成完成，长度:",d.length),t.setDetailedReport(d),console.log("报告已存储到store")}else console.error("没有找到测试结果，无法生成报告")},$=(d,l)=>{const f=d.fatigueLevel??1,k=d.fatigueLabel??ce[f],x=d.primaryType,R=d.secondaryType,M=d.sceneScores||{},se=d.recoveryLevel||"medium",be=d.personalTags||[],ie=l??d.duration??null,me=N(f,x,M,be),fe=T(),xe=ee(M),he=te(),ye=o(f,x,M),_e=c(),we=b(f,se);return`
    <div class="comprehensive-report">
      <!-- 报告头部 -->
      <div class="report-header border-l-4 border-indigo-600 bg-indigo-50 mb-8 p-6 rounded-xl">
        <h2 class="text-2xl font-bold text-indigo-900 mb-4">🧠 深度情绪疲惫度分析报告</h2>
        <div class="text-indigo-700">
          <p class="mb-3"><strong>测评时间：</strong>${new Date().toLocaleDateString()} | 用时：${ie!==null?w(ie):"未知"}</p>
          <p class="text-lg"><strong>核心诊断：</strong>${k}</p>
          <p class="text-sm">主要疲惫类型：${(x==null?void 0:x.name)||"综合压力型"}（匹配度：${(x==null?void 0:x.matchScore)||0}%）</p>
          ${R&&R.code!==x.code?`<p class="text-sm">次要类型：${R.name}（匹配度：${R.matchScore}%）</p>`:""}
        </div>
      </div>

      <!-- 第一部分：深度心理洞察 -->
      ${me}

      <!-- 第二部分：行为模式深度解读 -->
      ${fe}

      <!-- 第三部分：具体场景分析 -->
      ${xe}

      <!-- 第四部分：深层原因挖掘 -->
      ${he}

      <!-- 第五部分：分级干预策略 -->
      ${ye}

      <!-- 第六部分：个性化行动方案 -->
      ${_e}

      <!-- 第七部分：专业评估与建议 -->
      ${we}

      <!-- 温馨提示 -->
      <div class="bg-blue-50 border-l-4 border-blue-300 p-4 rounded-lg mt-6">
        <h4 class="text-blue-900 font-semibold mb-3">💡 重要提醒</h4>
        <div class="text-blue-800 text-sm leading-relaxed space-y-2">
          <p>• 这份报告基于您当前的心理状态绘制，情绪恢复是一个渐进的过程，需要持续的关注和耐心。</p>
          <p>• 如果疲惫感持续加重，或出现严重的心理困扰，请及时寻求专业的心理咨询师或治疗师的帮助。</p>
          <p>• 建议您定期（比如每2-3个月）重新测评，跟踪自己的情绪状态变化。</p>
        </div>
    </div>
  `},w=d=>{if(d===null)return"未知";const l=Math.floor(d/60),f=d%60;return f>0?`${l}分${f}秒`:`${l}分钟`};function N(d,l,f,k){const x=["情绪稳定","轻度疲劳","中度耗竭","重度透支","极度崩溃"],R=x[d]||x[1];let M="";switch(l==null?void 0:l.code){case"type_emotional_overload":M='您是一个高敏感、高共情能力的人，容易吸收他人的负面情绪而承担过重的心理负担。这种"情绪海绵"特质让您在人际交往中过度付出，却缺乏有效的自我保护机制。';break;case"type_responsibility_trap":M='您有强烈的责任感和完美主义倾向，习惯性地将他人需求置于自己需求之前，很难拒绝额外的工作和社交活动。这种"老好人"模式正在持续消耗您的心理资源。';break;case"type_comparison_anxiety":M='您容易与他人进行比较，对自己有过高的期望和要求，经常处于"不够好"的焦虑状态。这种持续的自我评价和比较正在消耗您宝贵的心理能量。';break;case"type_high_pressure_mode":M='您习惯于高强度、快节奏的生活方式和工作模式，很难真正放松下来，即使休息时也保持着"待机"状态。这种持续运转模式已经让您失去了与内心真实需求的连接。';break;default:M="您正在经历多方面的压力累积，需要在生活中重新平衡各种角色和需求。"}return`
    <div class="insight-section border-l-4 border-purple-500 bg-purple-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-purple-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-purple-200 rounded-full mr-3"></span>
        深度心理洞察
      </h3>

      <div class="space-y-4 text-gray-700">
        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🎯 您的核心心理特征</h4>
          <p class="leading-relaxed">${M}</p>
        </div>

        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🧠 当前状态解读</h4>
          <p class="leading-relaxed">您目前处于<strong>${R}</strong>状态。这种状态意味着您的情绪调节能力正在下降，心理资源消耗速度已经超过恢复速度。如果不及时干预，可能会进一步恶化为更深层的情绪问题。</p>
          ${d>=2?`
          <div class="mt-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-200">
            <p class="text-red-800"><strong>⚠️ 警示信号：</strong>您的情绪系统已经发出明显的求助信号，日常功能可能开始受到影响。这是您需要认真对待并采取行动的时刻。</p>
          </div>
          `:""}
        </div>

        ${k.length>0?`
        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🏷️ 个性化特征标签</h4>
          <div class="flex flex-wrap gap-2">
            ${k.map(se=>`<span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">${se}</span>`).join("")}
          </div>
        </div>
        `:""}
      </div>
    </div>
  `}function T(d,l,f){return`
    <div class="behavior-section border-l-4 border-blue-500 bg-blue-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-blue-200 rounded-full mr-3"></span>
        行为模式深度解读
      </h3>

      <div class="space-y-4">
        <div class="bg-white p-4 rounded-lg border-l-4 border-blue-200">
            <h4 class="font-semibold text-blue-900 mb-3">🔄 典型行为循环</h4>
            <div class="space-y-2 text-gray-700">
              <p><strong>触发阶段：</strong>遇到压力源 → 激活应对模式 → 产生情绪反应 → 承担后果 → 恢复阶段</p>
              <p><strong>您的模式：</strong>基于您的测评结果，您经常陷入<strong>"过度付出-疲惫积累-继续坚持"</strong>的循环，缺乏有效的暂停和重新评估机制。</p>
            </div>
          </div>

        <div class="bg-white p-4 rounded-lg border-l-4 border-blue-200">
            <h4 class="font-semibold text-blue-900 mb-3">💭 认知偏差识别</h4>
            <div class="space-y-2 text-gray-700">
              <p>• <strong>完美主义倾向：</strong>可能过度追求高标准，难以接受"足够好"的结果</p>
              <p>• <strong>责任偏差：</strong>过度承担他人的情绪需求和责任</p>
              <p>• <strong>恢复误区：</strong>认为休息就能解决问题，而忽视了深层的模式调整</p>
            </div>
          </div>
      </div>
    </div>
  `}function ee(d,l){const f=d.work||0,k=d.relationship||0,x=d.selfDemand||0;return`
    <div class="scenario-section border-l-4 border-orange-500 bg-orange-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-orange-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-orange-200 rounded-full mr-3"></span>
        具体场景深度分析
      </h3>

      <div class="space-y-6">
        ${f>=3?`
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">💼 工作场景高压状态</h4>
          <p class="text-red-800 leading-relaxed">您的工作压力评分为<strong>${f.toFixed(1)}</strong>，这表明您的工作环境或工作方式正在严重消耗您的心理资源。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：难以集中注意力、工作效率下降、对工作产生抵触情绪</p>
            <p>• 深层原因：工作量超负荷、缺乏控制感、人际关系压力、价值感缺失</p>
            <p>• <strong>立即行动建议：</strong>主动与上级沟通工作负荷、评估工作优先级、建立工作边界</p>
          </div>
        </div>
        `:f>=2?`
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">💼 工作场景中等压力</h4>
          <p class="text-yellow-800 leading-relaxed">您的工作压力评分为<strong>${f.toFixed(1)}</strong>，处于中等压力水平，需要适度关注。</p>
          <div class="mt-3 space-y-2 text-yellow-700">
            <p>• 可能的表现：偶尔感到工作疲惫、对某些任务缺乏动力、工作与生活平衡困难</p>
            <p>• 深层原因：工作量周期性波动、技能与要求不完全匹配、时间管理挑战</p>
            <p>• <strong>预防性建议：</strong>定期评估工作负荷、提升时间管理技能、培养工作之外的兴趣爱好</p>
          </div>
        </div>
        `:`
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">💼 工作场景相对健康</h4>
          <p class="text-green-800 leading-relaxed">您的工作压力评分为<strong>${f.toFixed(1)}</strong>，表明您在工作场景中保持了较好的心理状态。</p>
          <div class="mt-3 space-y-2 text-green-700">
            <p>• 积极表现：能够较好地处理工作挑战、保持工作效率、有良好的工作节奏</p>
            <p>• 保护因素：有效的工作策略、支持性的工作环境、清晰的职业目标</p>
            <p>• <strong>维护建议：</strong>继续当前的良好做法、定期自我评估、预防性调整工作策略</p>
          </div>
        </div>
        `}

        ${k>=3?`
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">👥 人际关系高消耗状态</h4>
          <p class="text-red-800 leading-relaxed">您的人际关系评分为<strong>${k.toFixed(1)}</strong>，表明社交互动正在大量消耗您的能量。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：害怕让人失望、难以拒绝他人请求、在关系中过度付出、经常感到被利用</p>
            <p>• 深层原因：缺乏健康的人际边界、过度共情、讨好型人格特质</p>
            <p>• <strong>立即行动建议：</strong>练习选择性参与社交、建立关系层次、学会表达自己的需求</p>
          </div>
        </div>
        `:k>=2?`
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">👥 人际关系中等消耗</h4>
          <p class="text-yellow-800 leading-relaxed">您的人际关系评分为<strong>${k.toFixed(1)}</strong>，处于中等水平，需要注意社交能量的管理。</p>
          <div class="mt-3 space-y-2 text-yellow-700">
            <p>• 可能的表现：在特定社交场合感到疲惫、偶尔难以平衡付出与回报、人际关系波动</p>
            <p>• 深层原因：社交技能需要提升、边界意识不够清晰、关系模式有待优化</p>
            <p>• <strong>改善建议：</strong>提升社交技巧、练习适度的自我保护、建立更健康的互动模式</p>
          </div>
        </div>
        `:`
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">👥 人际关系相对平衡</h4>
          <p class="text-green-800 leading-relaxed">您的人际关系评分为<strong>${k.toFixed(1)}</strong>，表明您在社交互动中保持了较好的平衡。</p>
          <div class="mt-3 space-y-2 text-green-700">
            <p>• 积极表现：能够健康地处理人际关系、有适当的边界意识、享受有质量的社交</p>
            <p>• 保护因素：良好的社交技巧、健康的人际边界、支持性的社交网络</p>
            <p>• <strong>维护建议：</strong>继续保持健康的社交模式、深化有意义的关系、定期评估人际关系质量</p>
          </div>
        </div>
        `}

        ${x>=3?`
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">🎯 自我要求过度苛责</h4>
          <p class="text-red-800 leading-relaxed">您的自我要求评分为<strong>${x.toFixed(1)}</strong>，表明您对自己的过高标准正在持续消耗心理能量。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：完美主义、自我批评严重、害怕失败、难以放松标准</p>
            <p>• 深层原因：早期形成的条件式自我价值、社会比较压力、内在的严厉批评声音</p>
            <p>• <strong>立即行动建议：</strong>重新定义成功标准、练习自我慈悲、设定现实可达成的目标</p>
          </div>
        </div>
        `:x>=2?`
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🎯 自我要求中等水平</h4>
          <p class="text-yellow-800 leading-relaxed">您的自我要求评分为<strong>${x.toFixed(1)}</strong>，表明您的自我期待适中，但有时可能过度自我批评。</p>
          <div class="mt-3 space-y-2 text-yellow-700">
            <p>• 可能的表现：偶尔追求完美、在重要任务上压力较大、对自己有较高期待</p>
            <p>• 深层原因：成长过程中形成的价值观、对成功的理解、社会环境影响</p>
            <p>• <strong>平衡建议：</strong>学会区分高标准与完美主义、练习自我接纳、建立弹性思维</p>
          </div>
        </div>
        `:`
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">🎯 自我要求相对健康</h4>
          <p class="text-green-800 leading-relaxed">您的自我要求评分为<strong>${x.toFixed(1)}</strong>，表明您对自己的期望是健康和现实的。</p>
          <div class="mt-3 space-y-2 text-green-700">
            <p>• 积极表现：能够设定现实的目标、从错误中学习、保持积极的自我对话</p>
            <p>• 保护因素：健康的自尊水平、良好的自我认知、弹性的思维模式</p>
            <p>• <strong>维护建议：</strong>继续保持健康的自我期待、支持性的自我对话、平衡目标与放松</p>
          </div>
        </div>
        `}
      </div>
    </div>
  `}function te(d,l,f){return`
    <div class="rootcause-section border-l-4 border-green-500 bg-green-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-green-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-green-200 rounded-full mr-3"></span>
        深层原因挖掘分析
      </h3>

      <div class="space-y-6">
        <div class="bg-white p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">🌱 早期形成因素</h4>
          <div class="space-y-3 text-gray-700">
            <p>• <strong>成长环境：</strong>可能成长过程中形成了特定的行为模式，如过度承担责任、寻求认可等</p>
            <p>• <strong>教育背景：</strong>可能被教育要完美、要照顾他人、不能表达负面情绪</p>
            <p>• <strong>家庭模式：</strong>可能在家庭中承担了"情绪照顾者"或"小大人"的角色</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">⚖️ 维持机制分析</h4>
          <div class="space-y-3 text-gray-700">
            <p>• <strong>当前应对方式：</strong>通过更努力工作、加倍付出来解决问题，但这实际上加剧了疲惫</p>
            <p>• <strong>次级收益：</strong>可能短期内获得了认可或避免了冲突，但长期来看却牺牲了心理健康</p>
            <p>• <strong>为什么难以改变：</strong>这些模式已经自动化，成为您身份认同的一部分，改变需要意识努力和持续练习</p>
          </div>
        </div>
      </div>
    </div>
  `}function o(d,l,f,k){const x=f.work||0,R=f.relationship||0;return`
    <div class="intervention-section border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-yellow-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-yellow-200 rounded-full mr-3"></span>
        分级干预策略
      </h3>

      <div class="space-y-6">
        <!-- 短期应急策略 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🚨 短期应急策略（立即可用）</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div class="space-y-2">
              <h5 class="font-medium">情绪急救技术</h5>
              <ul class="space-y-1 text-sm">
                <li>• <strong>3-3-3呼吸法：</strong>感到压力时立即进行，激活副交感神经的放松反应</li>
                <li>• <strong>情绪暂停术：</strong>在做出反应前问自己"这真的需要我处理吗？"</li>
                <li>• <strong>快速脱身：</strong>物理离开压力环境5-10分钟</li>
              </ul>
            </div>

            <div class="space-y-2">
              <h5 class="font-medium">边界建立技巧</h5>
              <ul class="space-y-1 text-sm">
                <li>• 练习说"不"，从小事情开始</li>
                <li>• 延迟回应："我需要考虑一下再答复"</li>
                <li>• 设定每日拒绝配额</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 中期重建方案 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🔄 中期重建方案（1-3个月）</h4>
          <div class="space-y-3 text-gray-700">
            ${x>=3?`
            <h5 class="font-medium text-orange-800">工作环境重建</h5>
            <ul class="space-y-1 text-sm">
              <li>• 主动与上级沟通工作量合理性</li>
              <li>• 重新协商工作优先级和时间节点</li>
              <li>• 建立工作时间的明确边界</li>
              <li>• 寻求工作调动的可能性</li>
            </ul>
            `:""}

            ${R>=3?`
            <h5 class="font-medium text-red-800">人际关系重建</h5>
            <ul class="space-y-1 text-sm">
              <li>• 识别和远离持续消耗您的关系</li>
              <li>• 建立健康的社交边界和距离</li>
              <li>• 培养基于相互尊重的关系模式</li>
              <li>• 学会表达自己的真实感受和需求</li>
            </ul>
            `:""}

            <h5 class="font-medium">生活方式重建</h5>
            <ul class="space-y-1 text-sm">
              <li>• 重新设计日常作息，确保充足高质量睡眠</li>
              <li>• 每天安排独处时间进行情绪恢复</li>
              <li>• 重新评估和减少当前的承诺和义务</li>
              <li>• 建立定期的运动和放松活动</li>
            </ul>
          </div>
        </div>

        <!-- 长期预防体系 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🛡️ 长期预防体系（3-6个月）</h4>
          <div class="space-y-3 text-gray-700">
            <h5 class="font-medium">认知重构核心</h5>
            <ul class="space-y-1 text-sm">
              <li>• 重新定义自我价值，摆脱条件式自我认可</li>
              <li>• 建立基于内在需求的决策框架</li>
              <li>• 学会接受不完美和不完整</li>
              <li>• 培养自我慈悲和内在支持声音</li>
            </ul>

            <h5 class="font-medium">可持续发展模式</h5>
            <ul class="space-y-1 text-sm">
              <li>• 建立定期自我检查和情绪评估习惯</li>
              <li>• 形成支持性的人际关系网络</li>
              <li>• 持续学习情绪调节和心理韧性技能</li>
              <li>• 在工作和生活中寻求意义感和价值感</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}function c(d,l,f,k,x){return`
    <div class="actionplan-section border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-indigo-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-indigo-200 rounded-full mr-3"></span>
        个性化行动方案
      </h3>

      <div class="space-y-6">
        <!-- 30天行动计划 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-200">
          <h4 class="font-semibold text-indigo-900 mb-3">📅 第一个月：稳定化计划</h4>
          <div class="space-y-3 text-gray-700">
            <h5 class="font-medium">每周目标设定</h5>
            <ul class="space-y-2 text-sm">
              <li>• <strong>睡眠目标：</strong>每晚7-8小时高质量睡眠，固定睡眠时间</li>
              <li>• <strong>边界练习：</strong>每周练习拒绝2-3个不合理请求</li>
              <li>• <strong>独处时间：</strong>每天安排30分钟独处时间</li>
              <li>• <strong>运动放松：</strong>每周3次轻度运动或放松活动</li>
            </ul>

            <h5 class="font-medium">每日自我检查</h5>
            <p class="text-sm">每天晚上记录：今天的情绪状态、触发因素、应对方式、改善空间。这有助于增强自我觉察能力。</p>

            <h5 class="font-medium">紧急预案</h5>
            <p class="text-sm">识别可能的压力触发情况，提前准备应对策略，避免陷入被动的情绪反应模式。</p>
          </div>
        </div>

        <!-- 专业资源推荐 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-200">
          <h4 class="font-semibold text-indigo-900 mb-3">📚 专业资源推荐</h4>
          <div class="space-y-3 text-gray-700">
            <h5 class="font-medium">书籍推荐</h5>
            <ul class="space-y-1 text-sm">
              <li>• 《情绪耗竭：如何识别和预防》- Herbert Freudenberger</li>
              <li>• 《过劳与自我照顾》- Christina Maslach</li>
              <li>• 《不完美的礼物》- Brené Brown</li>
            </ul>

            <h5 class="font-medium">实用工具和练习</h5>
            <ul class="space-y-1 text-sm">
              <li>• <strong>情绪日记：</strong>记录情绪触发和反应模式</li>
              <li>• <strong>正念冥想：</strong>每天10分钟，培养觉察和接纳</li>
              <li>• <strong>身体扫描：</strong>定期检查身体紧张部位，主动放松</li>
              <li>• <strong>支持小组：</strong>寻找有相似经历的人分享经验</li>
            </ul>

            <h5 class="font-medium">何时寻求专业帮助</h5>
            <div class="bg-orange-50 p-3 rounded border-l-4 border-orange-200 mt-3">
              <p class="text-orange-800 text-sm"><strong>立即寻求帮助：</strong>出现以下任一情况时</p>
              <ul class="space-y-1 text-orange-700 text-sm mt-2">
                <li>• 持续的情绪低落超过2周</li>
                <li>• 严重的睡眠问题或身体症状</li>
                <li>• 工作或人际关系严重受损</li>
                <li>• 出现自我伤害的想法或冲动</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function b(d,l,f){const k=d>=3?"高风险":d>=2?"中等风险":"低风险",x=l==="high"?8:l==="medium"?5:2;return`
    <div class="assessment-section border-l-4 border-red-500 bg-red-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-red-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-red-200 rounded-full mr-3"></span>
        专业评估与后续建议
      </h3>

      <div class="space-y-6">
        <!-- 风险评估 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">⚠️ 综合风险评估</h4>
          <div class="space-y-3 text-gray-700">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div class="text-center">
                <p class="font-medium">心理健康风险</p>
                <p class="text-2xl font-bold ${k==="高风险"?"text-red-600":k==="中等风险"?"text-orange-600":"text-green-600"}">${k}</p>
              </div>

              <div class="text-center">
                <p class="font-medium">功能影响程度</p>
                <p class="text-2xl font-bold text-orange-600">${d>=3?"严重":d>=2?"中等":"轻度"}</p>
              </div>

              <div class="text-center">
                <p class="font-medium">紧急程度</p>
                <p class="text-2xl font-bold ${d>=3?"text-red-600":d>=2?"text-orange-600":"text-yellow-600"}">${d>=3?"高":d>=2?"中":"低"}</p>
              </div>
            </div>

            ${d>=2?`
            <div class="mt-4 p-3 bg-red-100 rounded-lg">
              <p class="text-red-800"><strong>⚡ 重要提醒：</strong>您当前的疲惫状态已经对日常生活产生实质性影响，建议认真考虑寻求专业的心理健康支持。</p>
            </div>
            `:""}
          </div>
        </div>

        <!-- 康复前景分析 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">📈 康复前景分析</h4>
          <div class="space-y-3 text-gray-700">
            <p><strong>心理韧性评分：</strong>${x}/10 分</p>
            <p><strong>预计恢复时间：</strong>${l==="high"?"3-6个月":l==="medium"?"6-12个月":"12-18个月"}</p>
            <p><strong>成功关键因素：</strong>持续的自我觉察、有效的应对策略、支持性的人际环境、专业帮助的及时介入。</p>

            <p><strong>潜在障碍：</strong>${l==="low"?"心理韧性不足，抗压能力较弱":"当前应对策略效果递减，需要新的模式"}</p>
          </div>
        </div>

        <!-- 跟踪建议 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">📊 后续跟踪建议</h4>
          <div class="space-y-3 text-gray-700">
            <h5 class="font-medium">每周评估指标</h5>
            <ul class="space-y-1 text-sm">
              <li>• 整体情绪状态（1-10分评估）</li>
              <li>• 睡眠质量和时长</li>
              <li>• 工作压力感知程度</li>
              <li>• 社交活动后的能量水平</li>
              <li>• 身体症状变化</li>
            </ul>

            <h5 class="font-medium">每月深入回顾</h5>
            <ul class="space-y-1 text-sm">
              <li>• 识别情绪模式和触发因素的规律</li>
              <li>• 评估应对策略的有效性</li>
              <li>• 调整行动方案和目标</li>
              <li>• 必要时寻求专业咨询调整方案</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}return ke(()=>t.currentQuestionIndex,(d,l)=>{Math.abs(d-l)>1&&console.log(`Jumped to question ${d+1}`)}),ae(()=>{t.currentStep!=="questionnaire"&&i.push("/"),t.restoreAnswers()}),(d,l)=>(p(),g("div",jt,[e("div",Nt,[e("div",Rt,[e("div",Ft,[l[3]||(l[3]=e("div",null,[e("h1",{class:"text-2xl font-bold text-gray-900"},"情绪疲惫度测试"),e("p",{class:"text-sm text-gray-600 mt-1"},"请根据您最近的真实感受回答")],-1)),e("div",Ot,[e("div",Vt,u(D(t).progress)+"%",1),l[2]||(l[2]=e("div",{class:"text-xs text-gray-500"},"完成度",-1))])]),e("div",zt,[J(rt,{"answered-count":D(t).answeredCount,"total-questions":D(t).totalQuestions,"show-eta":!0},null,8,["answered-count","total-questions"])]),l[4]||(l[4]=e("div",{class:"mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg"},[e("p",{class:"text-amber-700 text-sm leading-relaxed"},[e("strong",null,"量表说明："),K("本量表参考情绪耗竭（Emotional Exhaustion）、职业倦怠（Burnout）及主观疲劳相关研究思路编制，用于日常自我觉察，不作为医疗或心理诊断依据。 ")])],-1))])]),e("div",Wt,[_.value?(p(),g("div",Ht,[e("h2",Gt,u(_.value.title),1),e("p",Kt,u(_.value.description),1)])):P("",!0),e("div",Jt,[J(le,{name:"question-slide",mode:"out-in"},{default:re(()=>[v.value?(p(),de(yt,{key:v.value.id,question:v.value,"question-number":D(t).currentQuestionIndex+1,"category-label":q(v.value),"model-value":D(t).answers[v.value.id],"onUpdate:modelValue":E,onAnswerSelected:m,onAutoNext:B},null,8,["question","question-number","category-label","model-value"])):(p(),g("div",Ut,[...l[5]||(l[5]=[e("div",{class:"text-gray-500 text-lg"},"题目加载中...",-1)])]))]),_:1})])]),e("div",Yt,[J(Et,{questions:a.value,"current-index":D(t).currentQuestionIndex,answers:D(t).answers,onGoToQuestion:j,onGoPrevious:z,onGoNext:W,onSubmit:H},null,8,["questions","current-index","answers"])]),l[13]||(l[13]=e("div",{class:"h-32"},null,-1)),s.value?(p(),g("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",onClick:l[1]||(l[1]=Se(f=>s.value=!1,["self"]))},[e("div",Xt,[l[11]||(l[11]=e("h3",{class:"text-xl font-bold text-gray-900 mb-4"},"确认提交测试",-1)),e("div",Zt,[e("div",es,[l[8]||(l[8]=e("h4",{class:"font-medium text-blue-900 mb-2"},"测试完成情况",-1)),e("div",ts,[e("div",ss,[l[6]||(l[6]=e("span",null,"整体进度:",-1)),e("span",rs,u(D(t).answeredCount)+" / "+u(D(t).totalQuestions)+" 题",1)]),e("div",os,[l[7]||(l[7]=e("span",null,"预计用时:",-1)),e("span",ns,u(Math.round((D(t).duration||0)/60))+" 分钟",1)])])]),C.value.warnings.length>0?(p(),g("div",is,[e("div",as,[l[10]||(l[10]=e("h4",{class:"font-medium text-yellow-900 mb-2"},"注意事项",-1)),e("ul",ls,[(p(!0),g(I,null,L(C.value.warnings,f=>(p(),g("li",{key:f,class:"flex items-start"},[l[9]||(l[9]=e("span",{class:"text-yellow-600 mr-2"},"⚠️",-1)),e("span",null,u(f),1)]))),128))])])])):P("",!0)]),e("div",ds,[e("button",{onClick:l[0]||(l[0]=f=>s.value=!1),class:"btn btn-secondary flex-1"}," 再检查一下 "),e("button",{onClick:Q,disabled:r.value,class:"btn btn-primary flex-1"},[r.value?(p(),g("span",ps,"生成报告中")):(p(),g("span",us,"确认提交"))],8,cs)])])])):P("",!0),r.value?(p(),g("div",gs,[...l[12]||(l[12]=[O('<div class="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center" data-v-7bd82ac6><div class="mb-6" data-v-7bd82ac6><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4" data-v-7bd82ac6><svg class="w-8 h-8 text-primary-600 animate-spin" fill="none" viewBox="0 0 24 24" data-v-7bd82ac6><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-7bd82ac6></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-7bd82ac6></path></svg></div><h3 class="text-xl font-bold text-gray-900 mb-2" data-v-7bd82ac6>正在生成您的个性化报告</h3><p class="text-gray-600" data-v-7bd82ac6>请稍候，我们正在分析您的答案并生成专属报告...</p></div><div class="space-y-2 text-sm text-gray-500" data-v-7bd82ac6><div class="flex items-center justify-center gap-2" data-v-7bd82ac6><span class="loading-dots" data-v-7bd82ac6>计算疲惫等级</span></div><div class="flex items-center justify-center gap-2" data-v-7bd82ac6><span class="loading-dots" data-v-7bd82ac6>分析疲惫来源</span></div><div class="flex items-center justify-center gap-2" data-v-7bd82ac6><span class="loading-dots" data-v-7bd82ac6>生成个性化建议</span></div></div></div>',1)])])):P("",!0)]))}}),bs=V(vs,[["__scopeId","data-v-7bd82ac6"]]),ms={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"},fs={class:"bg-white shadow-sm border-b border-gray-200"},xs={class:"max-w-6xl mx-auto px-4 py-6"},hs={class:"flex items-center justify-between"},ys={class:"text-gray-600 mt-1"},_s={key:0,class:"max-w-6xl mx-auto px-4 py-8"},ws={class:"result-card featured mb-8 animate-fade-in"},Cs={class:"text-center"},$s={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},ks={class:"text-center p-4 bg-blue-50 rounded-lg border border-blue-200"},Ss={class:"mb-3"},Bs={class:"text-lg font-semibold text-blue-800 mb-1"},Ts={class:"text-xs text-blue-600"},As={class:"metric-progress-bar mb-3"},qs={class:"font-medium text-blue-900"},Qs={class:"text-center p-4 bg-orange-50 rounded-lg border border-orange-200"},Is={class:"mb-3"},Ds={class:"text-lg font-semibold text-orange-800 mb-1"},Ls={class:"text-xs text-orange-600"},Ms={class:"metric-progress-bar mb-3"},Ps={class:"font-medium text-orange-900"},Es={class:"text-center p-4 bg-green-50 rounded-lg border border-green-200"},js={class:"mb-3"},Ns={class:"text-lg font-semibold text-green-800 mb-1"},Rs={class:"text-xs text-green-600"},Fs={class:"metric-progress-bar mb-3"},Os={class:"font-medium text-green-900"},Vs={class:"result-card animate-fade-in",style:{"animation-delay":"0.5s"}},zs={class:"flex flex-wrap gap-2 justify-center"},Ws={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"},Hs={class:"analysis-card animate-fade-in",style:{"animation-delay":"0.1s"}},Gs={class:"card-content"},Ks={class:"type-item primary"},Js={class:"type-header"},Us={class:"type-name"},Ys={class:"type-badge primary"},Xs={class:"type-description"},Zs={class:"type-section"},er={class:"feature-list"},tr={class:"type-section"},sr={class:"advice-list"},rr={key:0,class:"type-item secondary"},or={class:"type-header"},nr={class:"type-name"},ir={class:"type-badge secondary"},ar={class:"type-description"},lr={class:"analysis-card animate-fade-in",style:{"animation-delay":"0.2s"}},dr={class:"card-content"},cr={class:"scene-header"},ur={class:"scene-name"},pr={class:"scene-score"},gr={class:"progress-bar"},vr={class:"scene-advice"},br={class:"analysis-card animate-fade-in",style:{"animation-delay":"0.3s"}},mr={class:"card-content"},fr={class:"recovery-result"},xr={class:"recovery-description"},hr={class:"metrics-section"},yr={class:"metrics-grid"},_r={class:"metric-item"},wr={class:"metric-stars"},Cr={class:"metric-item"},$r={class:"metric-stars"},kr={class:"metric-item"},Sr={class:"metric-stars"},Br={class:"metric-item"},Tr={class:"metric-stars"},Ar={class:"improvement-section"},qr={class:"improvement-list"},Qr={key:0,class:"max-w-6xl mx-auto px-4 py-8 animate-fade-in"},Ir={class:"professional-advice-enhanced"},Dr={class:"report-main-content"},Lr={class:"content-wrapper"},Mr={class:"report-content-enhanced"},Pr={class:"content-inner"},Er=["innerHTML"],jr={key:1,class:"max-w-2xl mx-auto px-4 py-16 text-center"},Nr=F({__name:"Results",setup(n){const i=Z(),t=Y(),r=A(()=>t.result),s=o=>{if(o===null)return"未知";const c=Math.floor(o/60),b=o%60;return b>0?`${c}分${b}秒`:`${c}分钟`},a=o=>Ee[o]||o,v=o=>o>=4?"text-red-600 font-bold":o>=3.5?"text-orange-600 font-semibold":o>=2.5?"text-yellow-600 font-medium":"text-green-600",_=o=>o>=4?"bg-red-500":o>=3.5?"bg-orange-500":o>=2.5?"bg-yellow-500":"bg-green-500",C=o=>o>=4?"高压":o>=3.2?"偏高":o>=2.4?"中等":"较低",q=o=>o>=4?"bg-red-100 text-red-800 border border-red-200":o>=3.2?"bg-orange-100 text-orange-800 border border-orange-200":o>=2.4?"bg-yellow-100 text-yellow-800 border border-yellow-200":"bg-green-100 text-green-800 border border-green-200",E=(o,c)=>{const b=a(c).toLowerCase();return b.includes("工作")?o>=4?"立即暂停手头任务，拆解复杂工作，确保充足睡眠；必要时向领导反映工作量或寻求同事协助":o>=3.2?"合理安排工作优先级，为重要任务预留缓冲时间，主动与团队沟通协作分工":o>=2.4?"采用番茄工作法，定时休息，保持工作节奏，确保基本休息和放松":"保持当前良好习惯，适当安排工作间隙的轻度运动或冥想放松":b.includes("家庭")?o>=4?"立即与家人沟通当前状态，合理分配家庭责任，必要时寻求亲友帮助或专业家庭咨询":o>=3.2?'明确家庭角色边界，学会适当说"不"，建立家庭责任分担机制':o>=2.4?"定期与家人沟通交流，共同制定家庭计划，合理安排家庭和个人时间":"维持和谐的家庭关系，保持良好的家庭沟通习惯":b.includes("社交")?o>=4?"减少不必要的社交活动，专注于核心社交关系，必要时寻求心理咨询师帮助":o>=3.2?"选择性参加社交活动，学会拒绝过度社交邀约，注重社交质量而非数量":o>=2.4?"平衡独处和社交时间，选择让自己舒适的社交场合，设定社交边界":"保持积极的社交状态，继续维护健康的社交关系":b.includes("健康")||b.includes("身体")?o>=4?"立即就医检查身体状态，暂停高强度运动，保证充足睡眠和营养摄入":o>=3.2?"定期体检，合理安排运动强度和时间，保证规律作息和健康饮食":o>=2.4?"坚持适度运动，注意身体信号，保持健康的生活习惯":"继续保持健康生活方式，关注身体状况变化":b.includes("财务")||b.includes("经济")?o>=4?"寻求专业理财师帮助，重新规划财务目标，暂时避免重大财务决策":o>=3.2?"制定详细预算计划，增加收入渠道，控制不必要开支":o>=2.4?"定期检视财务状况，合理规划支出，建立应急储蓄":"保持良好理财习惯，持续关注财务健康":b.includes("学习")||b.includes("成长")?o>=4?"调整学习目标和计划，避免过度学习焦虑，寻求导师或同学的帮助指导":o>=3.2?"制定合理学习计划，采用高效学习方法，寻求学习伙伴支持":o>=2.4?"保持规律的学习节奏，注重劳逸结合，定期复习巩固":"保持学习动力，持续提升专业技能":o>=4?"立即安排短暂停顿，分析压力来源，拆解问题；必要时寻求专业支持和帮助":o>=3.2?"预留充足时间缓冲，明确优先级，主动寻求他人协助和建议":o>=2.4?"保持良好的节奏和习惯，定期进行自我检查和调整":"维持当前良好状态，注重日常保养和预防"},m=o=>{switch(o){case"low":return"bg-red-100 text-red-800 border border-red-200";case"medium":return"bg-yellow-100 text-yellow-800 border border-yellow-200";case"high":return"bg-green-100 text-green-800 border border-green-200";default:return"bg-gray-100 text-gray-800 border border-gray-200"}},B=o=>{switch(o){case"low":return"2.5/10";case"medium":return"6.5/10";case"high":return"8.5/10";default:return"5.0/10"}},j=o=>({type_emotional_overload:"高敏感高共情类型，容易吸收他人情绪而承担心理负担",type_responsibility_trap:"责任绑架型，习惯承担过多责任和义务",type_comparison_anxiety:"对比焦虑型，容易与他人比较而产生自我压力",type_high_pressure_mode:"高压运转型，习惯高强度快节奏的工作生活模式"})[o]||"综合压力型",z=o=>{switch(o){case"low":return"您的心理韧性较低，在面对压力时容易感到疲惫，建议积极学习压力管理技巧，必要时寻求专业支持来提升应对能力。";case"medium":return"您的心理韧性处于中等水平，有一定的抗压能力，但在持续压力下仍可能出现疲惫。建议加强自我调节训练，建立更好的压力应对机制。";case"high":return"您的心理韧性较强，能够在面对压力时保持相对稳定的情绪状态，并具备良好的自我调节能力。建议继续保持现有的压力管理习惯。";default:return"您的心理韧性水平正常，建议关注自身压力状态，适时进行调整和恢复。"}},W=o=>({type_emotional_overload:["容易被他人情绪影响，感到情绪负担重",'在团队中经常承担"情绪垃圾桶"角色',"下班后仍难以从工作压力中抽离","过度共情导致个人边界模糊"],type_responsibility_trap:["习惯性承担超出职责范围的工作","难以拒绝他人的请求，害怕让他人失望","凡事亲力亲为，不善于 delegating","责任感过强，自我要求过高"],type_comparison_anxiety:["频繁与他人比较，产生自我怀疑","过度关注他人的成就和评价","社交媒体使用后感到焦虑和不足","对自己要求过高，追求完美主义"],type_high_pressure_mode:["习惯高强度快节奏的工作生活方式","难以放松，总觉得有事情需要处理",'长期处于"战斗或逃跑"的应激状态',"忽略了身体和心理的恢复需求"]})[o]||["表现出综合性的压力症状","工作和生活平衡失调","需要全面提升自我管理能力"],H=o=>({type_emotional_overload:["建立情绪边界，学会适度共情","定期进行情绪释放活动（运动、冥想）","培养理性思考习惯，减少情绪内耗"],type_responsibility_trap:["学会合理拒绝，明确个人边界","培养团队协作意识，合理分配任务",'调整完美主义倾向，接受"足够好"的标准'],type_comparison_anxiety:["专注于个人成长，而非外在比较","减少社交媒体使用时间，培养现实社交","建立自我价值感，基于内在标准而非外界评价"],type_high_pressure_mode:["刻意练习放慢节奏，培养耐心","建立规律的作息和运动习惯","学会识别和尊重身体的疲劳信号"]})[o]||["建立健康的生活节奏","学习压力管理技巧","培养自我关怀的习惯"],Q=o=>({emotional:o==="high"?4:o==="medium"?3:2,recovery:o==="high"?4:o==="medium"?2:1,problem_solving:o==="high"?4:o==="medium"?3:2,social_support:o==="high"||o==="medium"?3:2}),y=o=>{switch(o){case"low":return["加强正念冥想训练，提升情绪觉察","建立完善的社会支持网络","学习专业的压力管理技巧","培养健康的生活习惯"];case"medium":return["深化情绪调节技能训练","扩大社交支持系统","定期进行自我反思和成长","建立更有效的应对机制"];case"high":return["继续保持现有的良好习惯","学习更高级的压力管理技巧","帮助他人建立心理韧性","追求更高层次的心理健康"];default:return["关注自身心理状态变化","建立基础的压力管理习惯","培养积极的思维模式"]}},$=o=>o>=90?{level:"高度匹配",color:"green",textColor:"text-green-600",barColor:"bg-green-500"}:o>=75?{level:"较好匹配",color:"blue",textColor:"text-blue-600",barColor:"bg-blue-500"}:o>=60?{level:"一般匹配",color:"yellow",textColor:"text-yellow-600",barColor:"bg-yellow-500"}:{level:"匹配度低",color:"gray",textColor:"text-gray-600",barColor:"bg-gray-500"},w=o=>o>=4?{level:"高压状态",color:"red",textColor:"text-red-600",barColor:"bg-red-500",percentage:o/5*100}:o>=3?{level:"中等偏高",color:"orange",textColor:"text-orange-600",barColor:"bg-orange-500",percentage:o/5*100}:o>=2?{level:"中等水平",color:"yellow",textColor:"text-yellow-600",barColor:"bg-yellow-500",percentage:o/5*100}:{level:"压力较低",color:"green",textColor:"text-green-600",barColor:"bg-green-500",percentage:o/5*100},N=o=>{switch(o){case"high":return{level:"韧性较强",textColor:"text-green-600",barColor:"bg-green-500",percentage:85};case"medium":return{level:"韧性中等",textColor:"text-yellow-600",barColor:"bg-yellow-500",percentage:65};case"low":return{level:"韧性较弱",textColor:"text-red-600",barColor:"bg-red-500",percentage:25};default:return{level:"韧性一般",textColor:"text-gray-600",barColor:"bg-gray-500",percentage:50}}},T=()=>{t.restart(),i.push("/")},ee=o=>{if(!o)return"";try{let c=o;const b=o.match(/(<h[^>]*>.*?行为模式深度解读.*?<\/h[^>]*>[\s\S]*?)(?=<h[^>]*>|$)/i);if(b){console.log("找到行为模式深度解读部分");const l=b[1].match(/<ul[\s\S]*?<\/ul>/gi);if(l&&l.length>=2){console.log("找到列表数量:",l.length);const f=`
          <div class="behavior-pattern-grid" style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 100% !important;
            flex: 1 1 0%;
            box-sizing: border-box;
            position: relative;
          " class="responsive-grid">
            <style>
              @media (max-width: 768px) {
                .responsive-grid {
                  grid-template-columns: 1fr !important;
                  gap: 1.5rem !important;
                  margin: 1.5rem 0 !important;
                }
                .responsive-grid .behavior-cycle-card,
                .responsive-grid .cognitive-bias-card {
                  padding: 1.25rem !important;
                }
                .responsive-grid h4 {
                  font-size: 1rem !important;
                }
              }
            </style>
            <div class="behavior-cycle-card" style="
              background: linear-gradient(135deg,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(248, 250, 252, 0.9) 100%
              );
              border: 2px solid transparent;
              border-image: linear-gradient(135deg, #3b82f6, #8b5cf6) 1;
              border-radius: 16px;
              padding: 1.75rem;
              box-shadow:
                0 8px 32px rgba(59, 130, 246, 0.15),
                0 4px 16px rgba(139, 92, 246, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8);
              position: relative;
              overflow: hidden;
              width: 100%;
              box-sizing: border-box;
              min-width: 0;
              flex: 1;
            ">
              <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
                opacity: 0.8;
              "></div>
              <h4 style="
                color: #1e40af;
                font-size: 1.25rem;
                font-weight: 700;
                margin: 0 0 1.5rem 0;
                padding: 0.5rem 0;
                text-align: center;
                background: linear-gradient(135deg, #1e40af, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                position: relative;
              ">
                🔄 典型行为循环
              </h4>
              ${l[0].replace(/<ul[^>]*>/g,'<ul style="margin: 0; padding: 0; list-style: none; width: 100%;">').replace(/<li>/g,'<li style="background: rgba(59, 130, 246, 0.05); border-left: 3px solid #3b82f6; border-radius: 8px; padding: 0.75rem 1rem; margin: 0.5rem 0; font-size: 0.875rem; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word;">')}
            </div>
            <div class="cognitive-bias-card" style="
              background: linear-gradient(135deg,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(248, 250, 252, 0.9) 100%
              );
              border: 2px solid transparent;
              border-image: linear-gradient(135deg, #ec4899, #f43f5e) 1;
              border-radius: 16px;
              padding: 1.75rem;
              box-shadow:
                0 8px 32px rgba(236, 72, 153, 0.15),
                0 4px 16px rgba(244, 63, 94, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8);
              position: relative;
              overflow: hidden;
              width: 100%;
              box-sizing: border-box;
              min-width: 0;
              flex: 1;
            ">
              <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #ec4899, #f43f5e, #ec4899);
                opacity: 0.8;
              "></div>
              <h4 style="
                color: #be185d;
                font-size: 1.25rem;
                font-weight: 700;
                margin: 0 0 1.5rem 0;
                padding: 0.5rem 0;
                text-align: center;
                background: linear-gradient(135deg, #be185d, #ec4899);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                position: relative;
              ">
                🧠 认知偏差识别
              </h4>
              ${l[1].replace(/<ul[^>]*>/g,'<ul style="margin: 0; padding: 0; list-style: none; width: 100%;">').replace(/<li>/g,'<li style="background: rgba(236, 72, 153, 0.05); border-left: 3px solid #ec4899; border-radius: 8px; padding: 0.75rem 1rem; margin: 0.5rem 0; font-size: 0.875rem; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word;">')}
            </div>
          </div>
        `,k=b.index||0,x=k+b[0].length,M=o.substring(k,x).replace(/<h[^>]*>.*?行为模式深度解读.*?<\/h[^>]*>[\s\S]*?(?=<h[^>]*>|$)/i,`$1${f}`);c=o.substring(0,k)+M+o.substring(x)}}return c}catch(c){return console.error("处理报告内容时出错:",c),o}},te=()=>{i.push("/")};return(o,c)=>(p(),g("div",ms,[e("div",fs,[e("div",xs,[e("div",hs,[e("div",null,[c[0]||(c[0]=e("h1",{class:"text-3xl font-bold text-gray-900"},"情绪疲惫度测试结果",-1)),e("p",ys," 测试时间: "+u(s(D(t).duration))+" · "+u(new Date().toLocaleDateString()),1)]),e("button",{onClick:T,class:"btn btn-secondary"}," 重新测试 ")])])]),r.value?(p(),g("div",_s,[e("div",ws,[e("div",Cs,[e("div",{class:S(["inline-flex items-center px-6 py-3 rounded-full text-lg font-bold mb-4",`fatigue-${r.value.fatigueLevel}`])},u(r.value.fatigueLabel),3),e("div",$s,[e("div",ks,[e("div",Ss,[e("div",Bs,u($(r.value.primaryType.matchScore).level),1),e("div",Ts,u(r.value.primaryType.matchScore)+"% 匹配度",1)]),e("div",As,[e("div",{class:S(["metric-progress-fill",$(r.value.primaryType.matchScore).barColor]),style:G({width:r.value.primaryType.matchScore+"%"})},null,6)]),e("div",qs,u(r.value.primaryType.name),1)]),e("div",Qs,[e("div",Is,[e("div",Ds,u(w(r.value.sceneScores.work).level),1),e("div",Ls,u(r.value.sceneScores.work.toFixed(1))+"/5.0 压力指数",1)]),e("div",Ms,[e("div",{class:S(["metric-progress-fill",w(r.value.sceneScores.work).barColor]),style:G({width:w(r.value.sceneScores.work).percentage+"%"})},null,6)]),e("div",Ps,u(C(r.value.sceneScores.work)),1)]),e("div",Es,[e("div",js,[e("div",Ns,u(N(r.value.recoveryLevel).level),1),e("div",Rs,u(B(r.value.recoveryLevel))+" 韧性评分",1)]),e("div",Fs,[e("div",{class:S(["metric-progress-fill",N(r.value.recoveryLevel).barColor]),style:G({width:N(r.value.recoveryLevel).percentage+"%"})},null,6)]),e("div",Os,u(r.value.recoveryLabel),1)])]),e("div",Vs,[c[1]||(c[1]=e("h3",{class:"text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2"},[e("span",{class:"w-2 h-2 bg-purple-500 rounded-full"}),K(" 个人特征标签 ")],-1)),e("div",zs,[(p(!0),g(I,null,L(r.value.personalTags,b=>(p(),g("span",{key:b,class:"px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"},u(b),1))),128))])])])]),e("div",Ws,[e("div",Hs,[c[4]||(c[4]=e("div",{class:"card-header"},[e("span",{class:"header-dot bg-blue-500"}),e("h3",{class:"card-title"},"疲惫类型分析")],-1)),e("div",Gs,[e("div",Ks,[e("div",Js,[e("h4",Us,u(r.value.primaryType.name),1),e("span",Ys,"主要 "+u(r.value.primaryType.matchScore)+"%",1)]),e("p",Xs,u(j(r.value.primaryType.code)),1),e("div",Zs,[c[2]||(c[2]=e("h5",{class:"section-title"},"🎯 典型表现",-1)),e("ul",er,[(p(!0),g(I,null,L(W(r.value.primaryType.code),b=>(p(),g("li",{key:b},u(b),1))),128))])]),e("div",tr,[c[3]||(c[3]=e("h5",{class:"section-title"},"💡 改善方向",-1)),e("ul",sr,[(p(!0),g(I,null,L(H(r.value.primaryType.code),b=>(p(),g("li",{key:b},u(b),1))),128))])])]),r.value.secondaryType&&r.value.secondaryType.code!==r.value.primaryType.code?(p(),g("div",rr,[e("div",or,[e("h4",nr,u(r.value.secondaryType.name),1),e("span",ir,"次要 "+u(r.value.secondaryType.matchScore)+"%",1)]),e("p",ar,u(j(r.value.secondaryType.code)),1)])):P("",!0)])]),e("div",lr,[c[5]||(c[5]=e("div",{class:"card-header"},[e("span",{class:"header-dot bg-orange-500"}),e("h3",{class:"card-title"},"场景压力分析")],-1)),e("div",dr,[(p(!0),g(I,null,L(r.value.sceneScores,(b,d)=>(p(),g("div",{key:d,class:"scene-item"},[e("div",cr,[e("span",ur,u(a(d)),1),e("div",pr,[e("span",{class:S(["score-text",v(b)])},u(b.toFixed(1)),3),e("span",{class:S(["pressure-badge",q(b)])},u(C(b)),3)])]),e("div",gr,[e("div",{class:S(["progress-fill",_(b)]),style:G({width:`${b/5*100}%`})},null,6)]),e("div",vr,u(E(b,d)),1)]))),128))])]),e("div",br,[c[12]||(c[12]=e("div",{class:"card-header"},[e("span",{class:"header-dot bg-green-500"}),e("h3",{class:"card-title"},"心理韧性评估")],-1)),e("div",mr,[e("div",fr,[e("div",{class:S(["recovery-badge",m(r.value.recoveryLevel)])},u(r.value.recoveryLabel),3),e("div",xr,u(z(r.value.recoveryLevel)),1)]),e("div",hr,[c[10]||(c[10]=e("h5",{class:"section-title"},"📊 韧性指标分析",-1)),e("div",yr,[e("div",_r,[c[6]||(c[6]=e("div",{class:"metric-label"},"情绪调节",-1)),e("div",wr,[(p(),g(I,null,L(5,b=>e("span",{key:b,class:S(["star",b<=Q(r.value.recoveryLevel).emotional?"filled":""])}," ★ ",2)),64))])]),e("div",Cr,[c[7]||(c[7]=e("div",{class:"metric-label"},"恢复速度",-1)),e("div",$r,[(p(),g(I,null,L(5,b=>e("span",{key:b,class:S(["star",b<=Q(r.value.recoveryLevel).recovery?"filled":""])}," ★ ",2)),64))])]),e("div",kr,[c[8]||(c[8]=e("div",{class:"metric-label"},"问题解决",-1)),e("div",Sr,[(p(),g(I,null,L(5,b=>e("span",{key:b,class:S(["star",b<=Q(r.value.recoveryLevel).problem_solving?"filled":""])}," ★ ",2)),64))])]),e("div",Br,[c[9]||(c[9]=e("div",{class:"metric-label"},"社会支持",-1)),e("div",Tr,[(p(),g(I,null,L(5,b=>e("span",{key:b,class:S(["star",b<=Q(r.value.recoveryLevel).social_support?"filled":""])}," ★ ",2)),64))])])])]),e("div",Ar,[c[11]||(c[11]=e("h5",{class:"section-title"},"🚀 提升建议",-1)),e("ul",qr,[(p(!0),g(I,null,L(y(r.value.recoveryLevel),b=>(p(),g("li",{key:b},u(b),1))),128))])])])])]),D(t).detailedReport?(p(),g("div",Qr,[e("div",Ir,[c[16]||(c[16]=O('<div class="report-header-decoration" data-v-6b71a50d><div class="header-pattern" data-v-6b71a50d></div><div class="header-content" data-v-6b71a50d><div class="header-icon" data-v-6b71a50d><div class="icon-ring" data-v-6b71a50d></div><span class="icon-emoji" data-v-6b71a50d>🧠</span></div><div class="header-text" data-v-6b71a50d><h3 class="report-title" data-v-6b71a50d>深度个性化分析报告</h3><p class="report-subtitle" data-v-6b71a50d>基于您的测试结果，为您生成的专业心理评估和改善建议</p><div class="header-badges" data-v-6b71a50d><span class="badge professional" data-v-6b71a50d>专业评估</span><span class="badge personalized" data-v-6b71a50d>个性化定制</span><span class="badge comprehensive" data-v-6b71a50d>全面分析</span></div></div></div></div>',1)),e("div",Dr,[e("div",Lr,[c[13]||(c[13]=O('<div class="left-decoration" data-v-6b71a50d><div class="decoration-dot dot-1" data-v-6b71a50d></div><div class="decoration-dot dot-2" data-v-6b71a50d></div><div class="decoration-dot dot-3" data-v-6b71a50d></div><div class="decoration-line" data-v-6b71a50d></div></div>',1)),e("div",Mr,[e("div",Pr,[e("div",{ref:"reportContentRef",innerHTML:ee(D(t).detailedReport),class:"report-text-enhanced"},null,8,Er)])]),c[14]||(c[14]=e("div",{class:"right-decoration"},[e("div",{class:"decoration-shape shape-1"}),e("div",{class:"decoration-shape shape-2"}),e("div",{class:"decoration-shape shape-3"})],-1))]),c[15]||(c[15]=O('<div class="report-footer-decoration" data-v-6b71a50d><div class="footer-pattern" data-v-6b71a50d></div><div class="footer-content" data-v-6b71a50d><div class="footer-divider" data-v-6b71a50d></div><p class="footer-text" data-v-6b71a50d><span class="footer-icon" data-v-6b71a50d>💡</span> 本报告基于情绪疲惫度评估体系生成，建议结合专业心理咨询师指导进行解读 </p></div></div>',1))])])])):P("",!0)])):(p(),g("div",jr,[e("div",{class:"result-card"},[e("div",{class:"text-gray-500"},[c[17]||(c[17]=e("svg",{class:"w-16 h-16 mx-auto mb-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2 -2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.707-.293H17"})],-1)),c[18]||(c[18]=e("h3",{class:"text-xl font-semibold mb-2"},"未找到测试结果",-1)),c[19]||(c[19]=e("p",{class:"mb-6"},"请先完成测试再来查看结果",-1)),e("button",{onClick:te,class:"btn btn-primary"}," 开始测试 ")])])]))]))}}),Rr=V(Nr,[["__scopeId","data-v-6b71a50d"]]),Fr={class:"min-h-screen flex items-center justify-center px-4"},Or=F({__name:"NotFound",setup(n){const i=Z(),t=()=>{i.push("/")};return(r,s)=>(p(),g("div",Fr,[e("div",{class:"max-w-md w-full text-center"},[e("div",{class:"card p-8"},[s[0]||(s[0]=e("h1",{class:"text-6xl font-bold text-gray-400 mb-4"},"404",-1)),s[1]||(s[1]=e("h2",{class:"text-2xl font-semibold text-gray-900 mb-4"},"页面未找到",-1)),s[2]||(s[2]=e("p",{class:"text-gray-600 mb-8"}," 抱歉，您访问的页面不存在。 ",-1)),e("button",{onClick:t,class:"btn btn-primary"}," 返回首页 ")])])]))}}),Vr=[{path:"/",name:"Introduction",component:Ke,meta:{title:"情绪疲惫度测试"}},{path:"/questionnaire",name:"Questionnaire",component:bs,meta:{title:"答题 - 情绪疲惫度测试"}},{path:"/results",name:"Results",component:Rr,meta:{title:"测试结果 - 情绪疲惫度测试"}},{path:"/404",name:"NotFound",component:Or,meta:{title:"页面未找到"}},{path:"/:pathMatch(.*)*",redirect:"/404"}],ve=Be({history:Te(),routes:Vr});ve.beforeEach(n=>{var i;(i=n.meta)!=null&&i.title&&(document.title=n.meta.title)});const zr={id:"app",class:"min-h-screen"},Wr=F({__name:"App",setup(n){const i=Y();return ae(()=>{i.restoreAnswers()}),(t,r)=>{const s=Ae("router-view");return p(),g("div",zr,[J(s,null,{default:re(({Component:a})=>[J(le,{name:"fade",mode:"out-in"},{default:re(()=>[(p(),de(qe(a)))]),_:2},1024)]),_:1})])}}}),ne=Qe(Wr),Hr=Ie();ne.use(Hr);ne.use(ve);ne.mount("#app");
//# sourceMappingURL=index-BRLAo6co.js.map
