import{d as ke,a as W,r as ne,c as p,b as e,e as U,f as F,u as le,o as g,g as D,t as u,n as se,F as j,h as N,i as A,w as Se,j as oe,k as Be,l as he,m as E,p as re,q as me,T as fe,s as Ae,v as xe,x as Te,y as qe,z as Ie,A as De,B as Qe,C as Me}from"./vendor-L23DVYXt.js";import{_ as je}from"./pdf-D7HrI6pR.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();const w={A:{title:"整体疲惫强度评估",description:"用来判断你到底有多累，不区分场景、不谈来源。",questions:[{id:"A1",text:"最近一段时间，我早上醒来时，经常觉得自己根本没有真正休息好。",category:"fatigue_intensity"},{id:"A2",text:"明明睡眠时间差不多，但整个人总是提不起精神、像手机电量一直不满格。",category:"fatigue_intensity"},{id:"A3",text:"一天下来，我会觉得脑子被掏空，哪怕什么都不做也很难真正放松。",category:"fatigue_intensity"},{id:"A4",text:"最近，我很容易对小事失去耐心，情绪一下子就被点燃或拉低。",category:"fatigue_intensity"},{id:"A5",text:"我经常需要强迫自己去完成本来应该轻松完成的事情。",category:"fatigue_intensity"},{id:"A6",text:"我常常会有一种说不出原因的心累，明明没有发生什么大事，却总觉得压得喘不过气。",category:"fatigue_intensity"},{id:"A7",text:"最近，我的注意力很难集中，看东西、开会或聊天都会不自觉走神。",category:"fatigue_intensity"},{id:"A8",text:"即使有空闲时间，我也很难真正投入一件事，总有一种怎么都休息不够的感觉。",category:"fatigue_intensity"}]},B:{title:"疲惫场景 / 掉血地图",description:"回答你主要是在哪些场景被榨干",subcategories:{work:{title:"工作 / 学习压力",description:"评估你在工作和学习场景中的消耗程度",questions:[{id:"B1",text:"面对工作 / 学习任务时，我经常有一种怎么追也追不完的焦虑感。",category:"work"},{id:"B2",text:"我常常担心自己在工作 / 学习上的表现不够好，会被否定或被淘汰。",category:"work"},{id:"B3",text:"即使已经很累了，我还是会不自觉地多接一些工作 / 任务，生怕被说不上进。",category:"work"},{id:"B4",text:"最近，我在工作 / 学习中很难找到成就感，更多是为了撑过去、别出事而硬撑。",category:"work"}]},relationship:{title:"人际 / 家庭关系消耗",description:"评估你在人际关系和家庭生活中的消耗程度",questions:[{id:"B5",text:"我会为了不让别人失望或生气，答应很多自己其实不太想做的事。",category:"relationship"},{id:"B6",text:"和家人、伴侣、朋友相处时，我经常在意他们的情绪，生怕自己说错话或做错事。",category:"relationship"},{id:"B7",text:"有时我会觉得自己像情绪垃圾桶，别人把负面情绪倾倒给我后，我还得自己消化。",category:"relationship"},{id:"B8",text:"和身边的人相处后，比起轻松，我更容易感觉到被消耗、被掏空。",category:"relationship"}]},selfDemand:{title:"自我要求 / 内心压力",description:"评估你对自己的要求程度和内心压力",questions:[{id:"B9",text:"我对自己有很多应该做到的标准，一旦没做到就会强烈自责。",category:"selfDemand"},{id:"B10",text:"当我稍微休息一下或偷个懒时，心里会冒出这样很没用、很浪费时间的声音。",category:"selfDemand"},{id:"B11",text:"我很难接受自己状态不好或者表现一般，总觉得自己应该能再好一点。",category:"selfDemand"},{id:"B12",text:"即使周围人已经觉得我做得够多了，我自己仍然觉得不够、不够、不够。",category:"selfDemand"}]}}},C:{title:"疲惫来源类型",description:"了解你疲惫的主要来源和类型特征",subtypes:{emotional_overload:{title:"情绪过载型",description:"高敏感、高共情，容易情绪过载",questions:[{id:"C1",text:"周围人的情绪变化（比如语气微妙变化、表情不对）很容易被我捕捉到，也会影响我一整天的心情。",category:"emotional_overload"},{id:"C2",text:"别人遇到困难或心情不好时，我会下意识把他们的感受揽到自己身上，替对方着急、替对方难受。",category:"emotional_overload"},{id:"C3",text:"即使事情已经过去了，我还是会反复回想当时的对话和细节，揣测自己有没有哪里做得不好。",category:"emotional_overload"},{id:"C4",text:"面对冲突或不开心的场面时，我比一般人更容易紧张、心慌，很想赶紧把气氛修好。",category:"emotional_overload"}]},responsibility_trap:{title:"责任绑架型",description:"习惯扛责，难以说不",questions:[{id:"C5",text:"很多时候我会觉得：这件事如果我不管，就会出问题，于是明明很累也会硬着头皮上。",category:"responsibility_trap"},{id:"C6",text:"当我拒绝别人、说不方便或不行时，会感到强烈的愧疚，好像自己是个自私的人。",category:"responsibility_trap"},{id:"C7",text:"我经常接手别人本可以自己处理的事情，只因为不想麻烦对方或不想看他们手忙脚乱。",category:"responsibility_trap"},{id:"C8",text:"我习惯在团队 / 家庭里扮演兜底的角色，出事先看我、收尾也找我。",category:"responsibility_trap"}]},comparison_anxiety:{title:"对比焦虑型",description:"易受比较刺激，容易对比焦虑",questions:[{id:"C9",text:"刷社交媒体或听到同龄人的近况时，我很容易不自觉地和他们比较，感觉自己落后了。",category:"comparison_anxiety"},{id:"C10",text:"当别人分享自己的成绩、收入或生活时，我表面上很平静，内心却会暗暗给自己很大压力。",category:"comparison_anxiety"},{id:"C11",text:"我常常会给自己设定一些这个年龄应该达到什么水平的目标，一旦没达到就很焦虑。",category:"comparison_anxiety"},{id:"C12",text:"听到别人说谁谁做得很好、谁谁很厉害时，我会立刻联想到自己是不是不够好。",category:"comparison_anxiety"}]},high_pressure_mode:{title:"高压稳定型",description:"习惯高压运转，不敢轻易停下",questions:[{id:"C13",text:"我已经习惯在高强度、高节奏下工作 / 生活，一旦突然闲下来反而会不安。",category:"high_pressure_mode"},{id:"C14",text:"遇到任务或问题时，我的第一反应通常是咬牙撑过去，而不是我能不能先调整一下自己。",category:"high_pressure_mode"},{id:"C15",text:"即使身体已经出现一些疲惫信号（比如失眠、头痛、心悸等），我也会安慰自己再撑一阵就好了。",category:"high_pressure_mode"},{id:"C16",text:"我很难向别人坦白自己累了、扛不住了，总觉得那样会显得自己不够坚强或不够专业。",category:"high_pressure_mode"}]}}},D:{title:"心理韧性 / 抗压能力",description:"评估我面对压力时的心理调节能力和自我修复资源",questions:[{id:"D1",text:"最近一段时间，我整体的睡眠质量还算可以，能在大部分夜晚获得相对完整的休息。",category:"recovery"},{id:"D2",text:"我的生活里有一两个可以真正说心里话的人，和他们聊完会感觉轻松一些。",category:"recovery"},{id:"D3",text:"我偶尔会给自己留出只属于自己、不需要对任何人负责的时间，用来放空或做喜欢的事情。",category:"recovery"},{id:"D4",text:"当我意识到自己真的撑不住时，我有能力也敢于说我需要暂停一下 / 需要帮助。",category:"recovery"}]}},Pe=[{value:1,label:"完全不符合",description:"这种描述完全不符合我的情况"},{value:2,label:"偶尔这样",description:"这种描述只是偶尔符合我的情况"},{value:3,label:"一半一半",description:"这种描述有时符合我的情况"},{value:4,label:"经常如此",description:"这种描述经常符合我的情况"},{value:5,label:"非常符合",description:"这种描述非常符合我的情况"}];function ve(){const i=[];return w.A.questions.forEach(a=>i.push(a.id)),Object.values(w.B.subcategories).forEach(a=>{a.questions.forEach(t=>i.push(t.id))}),Object.values(w.C.subtypes).forEach(a=>{a.questions.forEach(t=>i.push(t.id))}),w.D.questions.forEach(a=>i.push(a.id)),i}function ae(){return ve().length}const Ee={type_emotional_overload:"情绪过载型",type_responsibility_trap:"责任绑架型",type_comparison_anxiety:"对比焦虑型",type_high_pressure_mode:"高压稳定型"},ye={0:"0级 · 情绪稳定区（安全状态）",1:"1级 · 轻度情绪疲劳（预警信号）",2:"2级 · 中度情绪耗竭（需要调整）",3:"3级 · 重度情绪透支（急需干预）",4:"4级 · 极度情绪崩溃（危险状态）"},Ne={low:"心理韧性不足 · 抗压能力较弱",medium:"心理韧性中等 · 具备一定调节能力",high:"心理韧性良好 · 抗压能力强"},Fe={work:"工作/学习",relationship:"人际/家庭",selfDemand:"自我要求/内心压力"};class we{calculateFatigueResult(a){const t=this.calculateFatigueLevel(a),o=this.calculateSceneScores(a),s=this.calculateTypeMatches(a),l=this.calculateResilienceLevel(a),m=s[0],$=s[1]||s[0],k=this.generatePersonalTags(o,m,l),Q=this.createReportProfile(t,m,$,o,l,k);return{fatigueLevel:t,fatigueLabel:ye[t],sceneScores:o,typeMatches:s,primaryType:m,secondaryType:$,recoveryLevel:l,recoveryLabel:Ne[l],personalTags:k,reportProfile:Q}}calculateFatigueLevel(a){const o=["A1","A2","A3","A4","A5","A6","A7","A8"].map(l=>a[l]||3),s=o.reduce((l,m)=>l+m,0)/o.length;return s<2?0:s<3?1:s<3.5?2:s<4?3:4}calculateSceneScores(a){const t=["B1","B2","B3","B4"],o=["B5","B6","B7","B8"],s=["B9","B10","B11","B12"],l=this.calculateAverageScore(a,t),m=this.calculateAverageScore(a,o),$=this.calculateAverageScore(a,s);return{work:l,relationship:m,selfDemand:$}}calculateTypeMatches(a){return Object.entries({type_emotional_overload:["C1","C2","C3","C4"],type_responsibility_trap:["C5","C6","C7","C8"],type_comparison_anxiety:["C9","C10","C11","C12"],type_high_pressure_mode:["C13","C14","C15","C16"]}).map(([s,l])=>{const m=this.calculateAverageScore(a,l),$=Math.round((m-1)/4*100);return{code:s,name:Ee[s],matchScore:$,avgScore:m}}).sort((s,l)=>l.matchScore-s.matchScore)}calculateResilienceLevel(a){const t=["D1","D2","D3","D4"],o=this.calculateAverageScore(a,t);return o<2.5?"low":o<3.8?"medium":"high"}generatePersonalTags(a,t,o){const s=[];return a.work>=3.2&&s.push("工作/学习耗竭明显"),a.relationship>=3.2&&s.push("人际/家庭消耗明显"),a.selfDemand>=3.2&&s.push("自我要求偏高、容易苛责"),t.code==="type_emotional_overload"?s.push("高敏感、高共情"):t.code==="type_responsibility_trap"?s.push("习惯扛责、难以说不"):t.code==="type_comparison_anxiety"?s.push("容易对比焦虑"):t.code==="type_high_pressure_mode"&&s.push("习惯高压运转"),o==="low"?s.push("心理韧性不足、抗压能力较弱"):o==="medium"?s.push("心理韧性中等、需要加强调节"):s.push("心理韧性良好、具备自我修复能力"),s}createReportProfile(a,t,o,s,l,m){const $=Object.entries(s);$.sort((q,L)=>L[1]-q[1]);const k=$.filter(([q,L])=>L>=2.5).slice(0,2).map(([q])=>q),Q={work:this.getSceneIntensity(s.work),relationship:this.getSceneIntensity(s.relationship),selfDemand:this.getSceneIntensity(s.selfDemand)},R=this.identifySpecialPatterns(t,s,l),x=this.selectKeyTags(m,t.code);return{fatigueLevel:a,primaryType:t.code,secondaryType:o.code,recoveryLevel:l,dominantScenes:k,sceneIntensities:Q,specialPatterns:R,keyTags:x}}getSceneIntensity(a){return a>=3.5?"high":a>=2.5?"medium":"low"}identifySpecialPatterns(a,t,o){const s=[];return a.code==="type_responsibility_trap"&&t.work>=3.5&&s.push("work扛责者"),a.code==="type_emotional_overload"&&t.relationship>=3.5&&s.push("情绪缓冲垫"),a.code==="type_comparison_anxiety"&&t.selfDemand>=3.5&&s.push("自我驱动焦虑"),a.code==="type_high_pressure_mode"&&o==="low"&&s.push("透支稳定"),s}selectKeyTags(a,t){const s={type_emotional_overload:["sensitivity","emotional_boundary"],type_responsibility_trap:["responsibility","boundary_setting"],type_comparison_anxiety:["comparison","self_acceptance"],type_high_pressure_mode:["pressure","rest_permission"]}[t]||[];return a.forEach(l=>{l.includes("工作")&&s.push("work_stress"),(l.includes("人际")||l.includes("家庭"))&&s.push("relationship_burnout"),l.includes("自我要求")&&s.push("self_criticism"),l.includes("恢复力")&&s.push("recovery")}),[...new Set(s)].slice(0,4)}calculateAverageScore(a,t){if(t.length===0)return 0;const s=t.map(l=>a[l]||3).filter(l=>!isNaN(l)&&l!==null&&l!==void 0);return s.length===0?0:s.reduce((l,m)=>l+m,0)/s.length}}const _e=new we;function $e(i){return _e.calculateFatigueResult(i)}const Re=Object.freeze(Object.defineProperty({__proto__:null,FatigueCalculator:we,calculateFatigueResult:$e,fatigueCalculator:_e},Symbol.toStringTag,{value:"Module"})),ie=ke("fatigueTest",{state:()=>({currentStep:"introduction",answers:{},result:null,isCalculating:!1,currentQuestionIndex:0,startTime:null,endTime:null,detailedReport:null}),getters:{progress:i=>{const a=ae(),t=Object.keys(i.answers).length;return Math.round(t/a*100)},answeredCount:i=>Object.keys(i.answers).length,totalQuestions:()=>ae(),canSubmit:i=>ve().every(t=>i.answers[t]!==void 0),duration:i=>{if(!i.startTime)return null;const a=i.endTime||Date.now();return Math.round((a-i.startTime)/1e3)}},actions:{saveAnswer(i,a){this.answers[i]=a;try{localStorage.setItem("fbi_answers",JSON.stringify(this.answers))}catch(t){console.warn("无法保存答案到本地存储:",t)}},startTest(){this.currentStep="questionnaire",this.startTime=Date.now(),this.currentQuestionIndex=0,this.answers={},this.result=null,this.isCalculating=!1;try{localStorage.removeItem("fbi_answers")}catch(i){console.warn("无法清除本地存储:",i)}},goToResults(){this.currentStep="results"},restart(){this.currentStep="introduction",this.answers={},this.result=null,this.isCalculating=!1,this.currentQuestionIndex=0,this.startTime=null,this.endTime=null,this.detailedReport=null;try{localStorage.removeItem("fbi_answers")}catch(i){console.warn("无法清除本地存储:",i)}},setDetailedReport(i){this.detailedReport=i},async calculateResults(){if(!this.canSubmit)throw new Error("还有题目未完成");this.isCalculating=!0;try{await new Promise(i=>setTimeout(i,1500)),this.result=$e(this.answers),this.endTime=Date.now(),this.goToResults()}catch(i){throw console.error("计算结果失败:",i),i}finally{this.isCalculating=!1}},restoreAnswers(){try{const i=localStorage.getItem("fbi_answers");if(i){const a=JSON.parse(i);this.answers=a}}catch(i){console.warn("无法恢复本地存储的答案:",i)}},exportAnswers(){const i={answers:this.answers,timestamp:new Date().toISOString(),duration:this.duration,version:"1.0.0"};return JSON.stringify(i,null,2)},getModuleProgress(i){const t={A:["A1","A2","A3","A4","A5","A6","A7","A8"],B:["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12"],C:["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16"],D:["D1","D2","D3","D4"]}[i]||[],o=t.filter(m=>this.answers[m]!==void 0).length,s=t.length,l=Math.round(o/s*100);return{completed:o,total:s,percentage:l}},goToQuestion(i){const a=ae();i>=0&&i<a&&(this.currentQuestionIndex=i)},nextQuestion(){const i=ae();this.currentQuestionIndex<i-1&&this.currentQuestionIndex++},previousQuestion(){this.currentQuestionIndex>0&&this.currentQuestionIndex--},validateAnswers(){const a=ve().filter(l=>this.answers[l]===void 0),t=[],o=Object.values(this.answers);o.length>0&&new Set(o).size===1&&t.push("所有题目都选择了相同的选项，建议重新审视每个题目");const s={A:this.getModuleProgress("A"),B:this.getModuleProgress("B"),C:this.getModuleProgress("C"),D:this.getModuleProgress("D")};return Object.entries(s).forEach(([l,m])=>{m.completed<m.total&&t.push(`${l}模块还有${m.total-m.completed}道题目未完成`)}),{isValid:a.length===0,missingQuestions:a,warnings:t}}}}),Oe={class:"min-h-screen flex items-center justify-center px-4 py-12"},Le={class:"max-w-3xl w-full"},ze={class:"card p-8 md:p-12 animate-fade-in"},He={class:"text-center"},Ve=["disabled"],We={key:0},Ge={key:1,class:"loading-dots"},Ke={key:2,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Je=W({__name:"Introduction",setup(i){const a=ie(),t=le(),o=ne(!1),s=async()=>{o.value=!0;try{await new Promise(l=>setTimeout(l,500)),a.startTest(),t.push("/questionnaire")}catch(l){console.error("启动测试失败:",l)}finally{o.value=!1}};return(l,m)=>(g(),p("div",Oe,[e("div",Le,[e("div",ze,[m[2]||(m[2]=U('<div class="text-center mb-8" data-v-81cfdaae><h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4" data-v-81cfdaae> 情绪疲惫度测试 </h1><div class="w-16 h-1 bg-primary-500 mx-auto rounded-full mb-4" data-v-81cfdaae></div><p class="text-lg text-gray-600 text-balance leading-relaxed" data-v-81cfdaae> 用 3–5 分钟，看看你现在到底有多&quot;累&quot; </p></div><div class="space-y-6 mb-8" data-v-81cfdaae><div class="bg-blue-50 border border-blue-200 rounded-lg p-8" data-v-81cfdaae><h2 class="text-lg font-semibold text-blue-900 mb-3" data-v-81cfdaae> 🎯 测试说明 </h2><ul class="space-y-2 text-base text-blue-800" data-v-81cfdaae><li class="flex items-start" data-v-81cfdaae><span class="text-blue-500 mr-3" data-v-81cfdaae>•</span><span data-v-81cfdaae>这是一个<strong data-v-81cfdaae>自我觉察工具</strong>，帮助您了解当前的情绪状态</span></li><li class="flex items-start" data-v-81cfdaae><span class="text-blue-500 mr-3" data-v-81cfdaae>•</span><span data-v-81cfdaae>测试包含<strong data-v-81cfdaae>40道题目</strong>，预计用时3-5分钟</span></li><li class="flex items-start" data-v-81cfdaae><span class="text-blue-500 mr-3" data-v-81cfdaae>•</span><span data-v-81cfdaae><strong data-v-81cfdaae>非医疗诊断</strong>，仅为个人参考和自我探索</span></li><li class="flex items-start" data-v-81cfdaae><span class="text-blue-500 mr-3" data-v-81cfdaae>•</span><span data-v-81cfdaae>请根据<strong data-v-81cfdaae>最近一段时间</strong>的真实感受回答</span></li><li class="flex items-start" data-v-81cfdaae><span class="text-blue-500 mr-3" data-v-81cfdaae>•</span><span data-v-81cfdaae>本量表参考情绪耗竭（Emotional Exhaustion）、职业倦怠（Burnout）及主观疲劳相关研究思路编制</span></li></ul></div><div class="bg-green-50 border border-green-200 rounded-lg p-8" data-v-81cfdaae><h2 class="text-lg font-semibold text-green-900 mb-3" data-v-81cfdaae> ✨ 您将获得 </h2><div class="grid md:grid-cols-2 gap-4 text-base text-green-800" data-v-81cfdaae><div class="flex items-start" data-v-81cfdaae><span class="text-green-500 mr-3 text-xl" data-v-81cfdaae>📊</span><div data-v-81cfdaae><strong class="font-semibold" data-v-81cfdaae>疲惫等级评估</strong><p class="text-sm mt-1" data-v-81cfdaae>了解您的情绪疲惫程度（0-4级）</p></div></div><div class="flex items-start" data-v-81cfdaae><span class="text-green-500 mr-3 text-xl" data-v-81cfdaae>🎯</span><div data-v-81cfdaae><strong class="font-semibold" data-v-81cfdaae>疲惫来源分析</strong><p class="text-sm mt-1" data-v-81cfdaae>识别主要的疲惫类型和原因</p></div></div><div class="flex items-start" data-v-81cfdaae><span class="text-green-500 mr-3 text-xl" data-v-81cfdaae>🗺️</span><div data-v-81cfdaae><strong class="font-semibold" data-v-81cfdaae>场景掉血地图</strong><p class="text-sm mt-1" data-v-81cfdaae>发现哪些场景最消耗您</p></div></div><div class="flex items-start" data-v-81cfdaae><span class="text-green-500 mr-3 text-xl" data-v-81cfdaae>🔋</span><div data-v-81cfdaae><strong class="font-semibold" data-v-81cfdaae>心理韧性评估</strong><p class="text-sm mt-1" data-v-81cfdaae>评估您的心理调节能力和抗压能力</p></div></div></div></div><div class="bg-orange-50 border border-orange-200 rounded-lg p-8" data-v-81cfdaae><h2 class="text-lg font-semibold text-orange-900 mb-3" data-v-81cfdaae> 📝 个性化报告 </h2><p class="text-base text-orange-800 leading-relaxed" data-v-81cfdaae> 完成测试后，您将获得一份<strong data-v-81cfdaae>高度个性化</strong>的分析报告， 包含详细的类型解读、场景分析、心理韧性评估，以及<strong data-v-81cfdaae>针对性的行动建议</strong>。 </p></div></div>',2)),e("div",He,[e("button",{onClick:s,disabled:o.value,class:"btn btn-primary text-xl px-12 py-6 inline-flex items-center gap-4 min-h-[72px] text-lg"},[o.value?(g(),p("span",Ge,"准备中")):(g(),p("span",We,"开始测试")),o.value?F("",!0):(g(),p("svg",Ke,[...m[0]||(m[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"},null,-1)])]))],8,Ve),m[1]||(m[1]=e("p",{class:"text-base text-gray-500 mt-6"}," 测试完全匿名，您的答案仅在本地处理 ",-1))])]),m[3]||(m[3]=U('<div class="text-center mt-12" data-v-81cfdaae><p class="text-lg text-gray-500" data-v-81cfdaae> 适用于：长期处于压力环境的职场人、自由职业者、学生等 </p><p class="mt-3 text-lg text-gray-500" data-v-81cfdaae> 特别适合：自我评价为&quot;很累、心累、提不起劲&quot;的人群 </p><div class="mt-6 max-w-5xl mx-auto" data-v-81cfdaae><div class="card p-6 bg-amber-50 border-amber-200" data-v-81cfdaae><p class="text-amber-700 text-base leading-relaxed" data-v-81cfdaae><strong data-v-81cfdaae>重要声明：</strong>本量表用于日常自我觉察，不作为医疗或心理诊断依据。如需专业帮助，请咨询合格的心理健康专业人士。 </p></div></div></div>',1))])]))}}),Y=(i,a)=>{const t=i.__vccOpts||i;for(const[o,s]of a)t[o]=s;return t},Ue=Y(Je,[["__scopeId","data-v-81cfdaae"]]),Ye={class:"w-full"},Xe={class:"flex justify-between items-center mb-3"},Ze={class:"text-sm text-gray-500"},et={class:"progress-bar"},tt={class:"flex justify-between items-center mt-3"},st={class:"text-xs text-gray-500"},ot={key:0,class:"text-xs text-gray-500"},rt=W({__name:"ProgressBar",props:{answeredCount:{},totalQuestions:{},showEta:{type:Boolean,default:!0}},setup(i){const a=i,t=D(()=>Math.round(a.answeredCount/a.totalQuestions*100)),o=D(()=>{const s=a.totalQuestions-a.answeredCount,l=Math.ceil(s*.5/60);return l>0?l:null});return(s,l)=>(g(),p("div",Ye,[e("div",Xe,[l[0]||(l[0]=e("span",{class:"text-sm font-medium text-gray-700"}," 进度 ",-1)),e("span",Ze,u(i.answeredCount)+" / "+u(i.totalQuestions)+" 题 ",1)]),e("div",et,[e("div",{class:"progress-fill bg-gradient-to-r from-blue-500 to-blue-600",style:se({width:`${t.value}%`})},null,4)]),e("div",tt,[e("span",st," 完成度: "+u(t.value)+"% ",1),i.showEta&&o.value?(g(),p("div",ot," 预计剩余: "+u(o.value)+"分钟 ",1)):F("",!0)])]))}}),nt=Y(rt,[["__scopeId","data-v-8b9d41cb"]]),it={class:"question-card"},at={class:"flex items-center justify-between mb-1"},lt={class:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"},dt={key:0,class:"type-badge secondary text-xs"},ct={class:"mb-3"},ut={class:"text-base font-semibold text-gray-900 leading-tight"},gt={class:"space-y-1"},pt=["onClick","onKeyup","aria-label","aria-pressed","onFocus"],mt=["for","onClick"],vt={class:"flex items-center"},bt={class:"font-semibold text-gray-900 mr-1 text-sm"},ht={class:"text-gray-600 text-xs"},ft=["id","name","value","checked","onChange"],xt={key:0,class:"mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"},yt={class:"text-base text-blue-800"},wt=W({__name:"QuestionItem",props:{question:{},questionNumber:{},modelValue:{},categoryLabel:{},showHelper:{type:Boolean,default:!1}},emits:["update:modelValue","answer-selected","auto-next"],setup(i,{emit:a}){const t=i,o=a,s=D({get:()=>t.modelValue,set:k=>{k!==void 0&&o("update:modelValue",k)}}),l=ne(null),m=D(()=>Pe),$=k=>{s.value=k,o("answer-selected",t.question.id,k),navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{o("auto-next")},300)};return(k,Q)=>{var R;return g(),p("div",it,[e("div",at,[e("span",lt," 题目 "+u(i.questionNumber),1),i.categoryLabel?(g(),p("span",dt,u(i.categoryLabel),1)):F("",!0)]),e("div",ct,[e("h3",ut,u(i.question.text),1)]),e("div",gt,[(g(!0),p(j,null,N(m.value,x=>(g(),p("div",{key:x.value,class:"flex items-center gap-3"},[e("button",{onClick:q=>$(x.value),onKeyup:Se(q=>$(x.value),["enter"]),class:A(["scale-btn",s.value===x.value?"selected":"",l.value===x.value?"ring-2 ring-primary-500 ring-offset-2":""]),"aria-label":`选择${x.label}：${x.description}`,"aria-pressed":s.value===x.value,onFocus:q=>l.value=x.value,onBlur:Q[0]||(Q[0]=q=>l.value=null)},u(x.value),43,pt),e("label",{for:`question-${i.question.id}-${x.value}`,class:"flex-1 cursor-pointer select-none",onClick:q=>$(x.value)},[e("div",vt,[e("span",bt,u(x.label),1),e("span",ht,u(x.description),1)])],8,mt),e("input",{id:`question-${i.question.id}-${x.value}`,type:"radio",name:`question-${i.question.id}`,value:x.value,checked:s.value===x.value,class:"sr-only",onChange:q=>$(x.value)},null,40,ft)]))),128))]),i.showHelper&&s.value?(g(),p("div",xt,[e("p",yt,' 💡 您选择了"'+u((R=m.value.find(x=>x.value===s.value))==null?void 0:R.label)+'" ',1)])):F("",!0)])}}}),_t=Y(wt,[["__scopeId","data-v-3489485a"]]),$t={class:"flex items-center justify-between p-3 bg-white border-t border-gray-200"},Ct={class:"flex items-center gap-4"},kt=["disabled"],St={class:"hidden sm:flex items-center gap-2 text-sm text-gray-600"},Bt={class:"flex items-center gap-2 overflow-x-auto py-2 px-4 max-w-md"},At=["onClick","title","aria-label"],Tt={class:"flex items-center gap-4"},qt={key:0,class:"hidden lg:block text-base text-gray-600"},It={class:"font-medium"},Dt=["disabled"],Qt=["disabled"],Mt={class:"sm:hidden border-t border-gray-200 p-4"},jt={class:"flex items-center justify-between mb-3"},Pt={key:0,class:"grid grid-cols-8 gap-2 p-4 bg-gray-50 rounded-lg"},Et=["onClick"],Nt=W({__name:"QuestionNavigation",props:{questions:{},currentIndex:{},answers:{}},emits:["go-to-question","go-previous","go-next","submit"],setup(i,{emit:a}){const t=i,o=a,s=ie(),l=ne(!1),m=D(()=>t.currentIndex>0),$=D(()=>t.currentIndex<t.questions.length-1),k=D(()=>{const M=t.questions[t.currentIndex];return t.answers[M.id]!==void 0}),Q=D(()=>s.canSubmit),R=D(()=>t.questions.length),x=D(()=>{const _=t.questions[t.currentIndex].id;let B="",C=[];_.startsWith("A")?(B="整体疲惫强度",C=w.A.questions.map(I=>I.id)):_.startsWith("B")?["B1","B2","B3","B4"].includes(_)?(B="工作/学习",C=w.B.subcategories.work.questions.map(I=>I.id)):["B5","B6","B7","B8"].includes(_)?(B="人际/家庭",C=w.B.subcategories.relationship.questions.map(I=>I.id)):(B="自我要求",C=w.B.subcategories.selfDemand.questions.map(I=>I.id)):_.startsWith("C")?(B="疲惫来源类型",C=["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16"]):_.startsWith("D")&&(B="恢复资源",C=w.D.questions.map(I=>I.id));const z=C.filter(I=>t.answers[I]!==void 0).length;return{name:B,completed:z,total:C.length}}),q=()=>{m.value&&o("go-previous")},L=()=>{$.value&&k.value&&o("go-next")},X=M=>{l.value=!1,o("go-to-question",M)},Z=M=>{l.value=!1,o("go-to-question",M)},ee=()=>{Q.value&&o("submit")};return(M,_)=>(g(),p(j,null,[e("div",$t,[e("div",Ct,[e("button",{onClick:q,disabled:!m.value,class:A(["btn btn-secondary flex items-center gap-2",{"opacity-50 cursor-not-allowed":!m.value}])},[..._[1]||(_[1]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),oe(" 上一题 ",-1)])],10,kt),e("div",St,[e("span",null,u(i.currentIndex+1),1),_[2]||(_[2]=e("span",{class:"text-gray-400"},"/",-1)),e("span",null,u(R.value),1)])]),e("div",Bt,[(g(!0),p(j,null,N(i.questions,(B,C)=>(g(),p("button",{key:B.id,onClick:z=>X(C),class:A(["w-4 h-4 rounded-full flex-shrink-0 transition-all duration-200",C===i.currentIndex?"bg-primary-600 scale-125":i.answers[B.id]!==void 0?"bg-green-500":"bg-gray-300 hover:bg-gray-400"]),title:`题目 ${C+1}${i.answers[B.id]!==void 0?" (已完成)":" (未完成)"}`,"aria-label":`跳转到题目 ${C+1}`},null,10,At))),128))]),e("div",Tt,[x.value?(g(),p("div",qt,[e("span",null,u(x.value.name)+": ",1),e("span",It,u(x.value.completed)+"/"+u(x.value.total),1)])):F("",!0),$.value?(g(),p("button",{key:1,onClick:L,disabled:!k.value,class:A(["btn btn-primary flex items-center gap-2",{"opacity-50 cursor-not-allowed":!k.value}])},[..._[3]||(_[3]=[oe(" 下一题 ",-1),e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])],10,Dt)):(g(),p("button",{key:2,onClick:ee,disabled:!Q.value,class:A(["btn btn-primary flex items-center gap-2",{"opacity-50 cursor-not-allowed":!Q.value}])},[..._[4]||(_[4]=[e("span",null,"提交测试",-1),e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)])],10,Qt))])]),e("div",Mt,[e("div",jt,[_[6]||(_[6]=e("span",{class:"text-base text-gray-600"},"快速跳转",-1)),e("button",{onClick:_[0]||(_[0]=B=>l.value=!l.value),class:"text-primary-600 text-base flex items-center gap-1"},[oe(u(i.currentIndex+1)+" / "+u(R.value)+" ",1),(g(),p("svg",{class:A(["w-4 h-4",{"rotate-180":l.value}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[..._[5]||(_[5]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))])]),l.value?(g(),p("div",Pt,[(g(!0),p(j,null,N(i.questions,(B,C)=>(g(),p("button",{key:B.id,onClick:z=>Z(C),class:A(["w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center",C===i.currentIndex?"bg-primary-600 text-white":i.answers[B.id]!==void 0?"bg-green-500 text-white":"bg-white border border-gray-300 text-gray-600"])},u(C+1),11,Et))),128))])):F("",!0)])],64))}}),Ft=Y(Nt,[["__scopeId","data-v-62b917b9"]]),Rt={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"},Ot={class:"bg-white shadow-sm border-b border-gray-200"},Lt={class:"max-w-2xl mx-auto px-4 py-4"},zt={class:"flex items-center justify-between"},Ht={class:"text-right"},Vt={class:"text-lg font-bold text-primary-600"},Wt={class:"mt-3"},Gt={class:"max-w-2xl mx-auto px-4 py-4"},Kt={key:0,class:"text-center mb-4 animate-fade-in"},Jt={class:"text-base font-semibold text-gray-900 mb-1"},Ut={class:"text-gray-600 text-xs"},Yt={class:"max-w-2xl mx-auto"},Xt={key:1,class:"card p-12 text-center"},Zt={class:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg"},es={class:"bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-slide-up"},ts={class:"mb-6"},ss={class:"bg-blue-50 border border-blue-200 rounded-lg p-4"},os={class:"space-y-2 text-sm text-blue-800"},rs={class:"flex justify-between"},ns={class:"font-medium"},is={class:"flex justify-between"},as={class:"font-medium"},ls={key:0,class:"mt-4"},ds={class:"bg-yellow-50 border border-yellow-200 rounded-lg p-4"},cs={class:"space-y-1 text-sm text-yellow-800"},us={class:"flex gap-3"},gs=["disabled"],ps={key:0},ms={key:1,class:"loading-dots"},vs={key:1,class:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"},bs=W({__name:"Questionnaire",setup(i){const a=le(),t=ie(),o=ne(!1),s=ne(!1),l=D(()=>{const r=[];return r.push(...w.A.questions),r.push(...w.B.subcategories.work.questions),r.push(...w.B.subcategories.relationship.questions),r.push(...w.B.subcategories.selfDemand.questions),r.push(...w.C.subtypes.emotional_overload.questions),r.push(...w.C.subtypes.responsibility_trap.questions),r.push(...w.C.subtypes.comparison_anxiety.questions),r.push(...w.C.subtypes.high_pressure_mode.questions),r.push(...w.D.questions),r}),m=D(()=>l.value[t.currentQuestionIndex]),$=D(()=>{const r=l.value[t.currentQuestionIndex];if(!r)return null;const d=r.id;return d.startsWith("A")?{title:w.A.title,description:w.A.description}:d.startsWith("B")?{title:w.B.title,description:w.B.description}:d.startsWith("C")?{title:w.C.title,description:w.C.description}:d.startsWith("D")?{title:w.D.title,description:w.D.description}:null}),k=D(()=>t.validateAnswers()),Q=r=>{const d=r.id;if(d.startsWith("A"))return"整体疲惫强度";if(d.startsWith("B")){if(["B1","B2","B3","B4"].includes(d))return"工作/学习";if(["B5","B6","B7","B8"].includes(d))return"人际/家庭";if(["B9","B10","B11","B12"].includes(d))return"自我要求"}else if(d.startsWith("C")){if(["C1","C2","C3","C4"].includes(d))return"情绪过载型";if(["C5","C6","C7","C8"].includes(d))return"责任绑架型";if(["C9","C10","C11","C12"].includes(d))return"对比焦虑型";if(["C13","C14","C15","C16"].includes(d))return"高压稳定型"}else if(d.startsWith("D"))return"心理韧性";return""},R=r=>{m.value&&t.saveAnswer(m.value.id,r)},x=(r,d)=>{console.log(`Question ${r} answered with score ${d}`)},q=()=>{t.currentQuestionIndex<l.value.length-1?t.nextQuestion():console.log("已是最后一题，等待用户提交")},L=r=>{t.goToQuestion(r)},X=()=>{t.previousQuestion()},Z=()=>{t.nextQuestion()},ee=()=>{t.canSubmit&&(s.value=!0)},M=async()=>{o.value=!0,s.value=!1;try{if(!t.canSubmit)throw new Error("还有题目未完成");t.isCalculating=!0,await new Promise(d=>setTimeout(d,1500));const{calculateFatigueResult:r}=await je(async()=>{const{calculateFatigueResult:d}=await Promise.resolve().then(()=>Re);return{calculateFatigueResult:d}},void 0);t.result=r(t.answers),t.endTime=Date.now(),await _(),o.value=!1,t.isCalculating=!1,console.log("报告生成完成，准备跳转到结果页面"),a.push("/results")}catch(r){console.error("提交测试失败:",r),o.value=!1,t.isCalculating=!1}},_=async()=>{if(console.log("开始生成详细报告..."),t.result){console.log("测试结果存在，开始生成报告内容");const r=B(t.result,t.duration);console.log("报告内容生成完成，长度:",r.length),t.setDetailedReport(r),console.log("报告已存储到store")}else console.error("没有找到测试结果，无法生成报告")},B=(r,d)=>{const f=r.fatigueLevel??1,y=r.fatigueLabel??ye[f],h=r.primaryType,P=r.secondaryType,T=r.sceneScores||{},H=r.recoveryLevel||"medium",G=r.personalTags||[],K=d??r.duration??null,te=z(f,h,T,G),S=I(),O=de(T),ue=ce(),J=n(f,h,T,H),ge=c(f,h,T,G,H),b=v(f,H);return`
    <div class="comprehensive-report">
      <!-- 报告头部 -->
      <div class="report-header border-l-4 border-indigo-600 bg-indigo-50 mb-8 p-6 rounded-xl">
        <h2 class="text-2xl font-bold text-indigo-900 mb-4">🧠 深度情绪疲惫度分析报告</h2>
        <div class="text-indigo-700">
          <p class="mb-3"><strong>测评时间：</strong>${new Date().toLocaleDateString()} | 用时：${K!==null?C(K):"未知"}</p>
          <p class="text-lg"><strong>核心诊断：</strong>${y}</p>
          <p class="text-sm">主要疲惫类型：${(h==null?void 0:h.name)||"综合压力型"}（匹配度：${(h==null?void 0:h.matchScore)||0}%）</p>
          ${P&&P.code!==h.code?`<p class="text-sm">次要类型：${P.name}（匹配度：${P.matchScore}%）</p>`:""}
        </div>
      </div>

      <!-- 第一部分：深度心理洞察 -->
      ${te}

      <!-- 第二部分：行为模式深度解读 -->
      ${S}

      <!-- 第三部分：具体场景分析 -->
      ${O}

      <!-- 第四部分：深层原因挖掘 -->
      ${ue}

      <!-- 第五部分：分级干预策略 -->
      ${J}

      <!-- 第六部分：个性化行动方案 -->
      ${ge}

      <!-- 第七部分：专业评估与建议 -->
      ${b}

      <!-- 温馨提示 -->
      <div class="bg-blue-50 border-l-4 border-blue-300 p-4 rounded-lg mt-6">
        <h4 class="text-blue-900 font-semibold mb-3">💡 重要提醒</h4>
        <div class="text-blue-800 text-sm leading-relaxed space-y-2">
          <p>• 这份报告基于您当前的心理状态绘制，情绪恢复是一个渐进的过程，需要持续的关注和耐心。</p>
          <p>• 如果疲惫感持续加重，或出现严重的心理困扰，请及时寻求专业的心理咨询师或治疗师的帮助。</p>
          <p>• 建议您定期（比如每2-3个月）重新测评，跟踪自己的情绪状态变化。</p>
        </div>
    </div>
  `},C=r=>{if(r===null)return"未知";const d=Math.floor(r/60),f=r%60;return f>0?`${d}分${f}秒`:`${d}分钟`};function z(r,d,f,y){const h=["情绪稳定","轻度疲劳","中度耗竭","重度透支","极度崩溃"],P=h[r]||h[1];let T="";switch(d==null?void 0:d.code){case"type_emotional_overload":T='您是一个高敏感、高共情能力的人，容易吸收他人的负面情绪而承担过重的心理负担。这种"情绪海绵"特质让您在人际交往中过度付出，却缺乏有效的自我保护机制。';break;case"type_responsibility_trap":T='您有强烈的责任感和完美主义倾向，习惯性地将他人需求置于自己需求之前，很难拒绝额外的工作和社交活动。这种"老好人"模式正在持续消耗您的心理资源。';break;case"type_comparison_anxiety":T='您容易与他人进行比较，对自己有过高的期望和要求，经常处于"不够好"的焦虑状态。这种持续的自我评价和比较正在消耗您宝贵的心理能量。';break;case"type_high_pressure_mode":T='您习惯于高强度、快节奏的生活方式和工作模式，很难真正放松下来，即使休息时也保持着"待机"状态。这种持续运转模式已经让您失去了与内心真实需求的连接。';break;default:T="您正在经历多方面的压力累积，需要在生活中重新平衡各种角色和需求。"}return`
    <div class="insight-section border-l-4 border-purple-500 bg-purple-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-purple-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-purple-200 rounded-full mr-3"></span>
        深度心理洞察
      </h3>

      <div class="space-y-4 text-gray-700">
        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🎯 您的核心心理特征</h4>
          <p class="leading-relaxed">${T}</p>
        </div>

        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🧠 当前状态解读</h4>
          <p class="leading-relaxed">您目前处于<strong>${P}</strong>状态。这种状态意味着您的情绪调节能力正在下降，心理资源消耗速度已经超过恢复速度。如果不及时干预，可能会进一步恶化为更深层的情绪问题。</p>
          ${r>=2?`
          <div class="mt-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-200">
            <p class="text-red-800"><strong>⚠️ 警示信号：</strong>您的情绪系统已经发出明显的求助信号，日常功能可能开始受到影响。这是您需要认真对待并采取行动的时刻。</p>
          </div>
          `:""}
        </div>

        ${y.length>0?`
        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🏷️ 个性化特征标签</h4>
          <div class="flex flex-wrap gap-2">
            ${y.map(H=>`<span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">${H}</span>`).join("")}
          </div>
        </div>
        `:""}
      </div>
    </div>
  `}function I(r,d,f){return`
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
  `}function de(r,d){const f=r.work||0,y=r.relationship||0,h=r.selfDemand||0;return`
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

        ${y>=3?`
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">👥 人际关系高消耗状态</h4>
          <p class="text-red-800 leading-relaxed">您的人际关系评分为<strong>${y.toFixed(1)}</strong>，表明社交互动正在大量消耗您的能量。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：害怕让人失望、难以拒绝他人请求、在关系中过度付出、经常感到被利用</p>
            <p>• 深层原因：缺乏健康的人际边界、过度共情、讨好型人格特质</p>
            <p>• <strong>立即行动建议：</strong>练习选择性参与社交、建立关系层次、学会表达自己的需求</p>
          </div>
        </div>
        `:y>=2?`
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">👥 人际关系中等消耗</h4>
          <p class="text-yellow-800 leading-relaxed">您的人际关系评分为<strong>${y.toFixed(1)}</strong>，处于中等水平，需要注意社交能量的管理。</p>
          <div class="mt-3 space-y-2 text-yellow-700">
            <p>• 可能的表现：在特定社交场合感到疲惫、偶尔难以平衡付出与回报、人际关系波动</p>
            <p>• 深层原因：社交技能需要提升、边界意识不够清晰、关系模式有待优化</p>
            <p>• <strong>改善建议：</strong>提升社交技巧、练习适度的自我保护、建立更健康的互动模式</p>
          </div>
        </div>
        `:`
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">👥 人际关系相对平衡</h4>
          <p class="text-green-800 leading-relaxed">您的人际关系评分为<strong>${y.toFixed(1)}</strong>，表明您在社交互动中保持了较好的平衡。</p>
          <div class="mt-3 space-y-2 text-green-700">
            <p>• 积极表现：能够健康地处理人际关系、有适当的边界意识、享受有质量的社交</p>
            <p>• 保护因素：良好的社交技巧、健康的人际边界、支持性的社交网络</p>
            <p>• <strong>维护建议：</strong>继续保持健康的社交模式、深化有意义的关系、定期评估人际关系质量</p>
          </div>
        </div>
        `}

        ${h>=3?`
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">🎯 自我要求过度苛责</h4>
          <p class="text-red-800 leading-relaxed">您的自我要求评分为<strong>${h.toFixed(1)}</strong>，表明您对自己的过高标准正在持续消耗心理能量。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：完美主义、自我批评严重、害怕失败、难以放松标准</p>
            <p>• 深层原因：早期形成的条件式自我价值、社会比较压力、内在的严厉批评声音</p>
            <p>• <strong>立即行动建议：</strong>重新定义成功标准、练习自我慈悲、设定现实可达成的目标</p>
          </div>
        </div>
        `:h>=2?`
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🎯 自我要求中等水平</h4>
          <p class="text-yellow-800 leading-relaxed">您的自我要求评分为<strong>${h.toFixed(1)}</strong>，表明您的自我期待适中，但有时可能过度自我批评。</p>
          <div class="mt-3 space-y-2 text-yellow-700">
            <p>• 可能的表现：偶尔追求完美、在重要任务上压力较大、对自己有较高期待</p>
            <p>• 深层原因：成长过程中形成的价值观、对成功的理解、社会环境影响</p>
            <p>• <strong>平衡建议：</strong>学会区分高标准与完美主义、练习自我接纳、建立弹性思维</p>
          </div>
        </div>
        `:`
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">🎯 自我要求相对健康</h4>
          <p class="text-green-800 leading-relaxed">您的自我要求评分为<strong>${h.toFixed(1)}</strong>，表明您对自己的期望是健康和现实的。</p>
          <div class="mt-3 space-y-2 text-green-700">
            <p>• 积极表现：能够设定现实的目标、从错误中学习、保持积极的自我对话</p>
            <p>• 保护因素：健康的自尊水平、良好的自我认知、弹性的思维模式</p>
            <p>• <strong>维护建议：</strong>继续保持健康的自我期待、支持性的自我对话、平衡目标与放松</p>
          </div>
        </div>
        `}
      </div>
    </div>
  `}function ce(r,d,f){return`
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
  `}function n(r,d,f,y){const h=f.work||0,P=f.relationship||0,T=f.selfDemand||0,H=()=>r>=3.5?`
        <div class="space-y-2">
          <h5 class="font-medium text-red-700">🚨 紧急情绪干预</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>立即暂停：</strong>停止所有非必要活动，优先处理情绪危机</li>
            <li>• <strong>安全空间：</strong>找到能够让您完全放松的物理空间</li>
            <li>• <strong>呼吸自救：</strong>4-7-8呼吸法（吸气4秒，屏息7秒，呼气8秒）</li>
            <li>• <strong>现实检验：</strong>提醒自己"这只是暂时的，我会度过这个时期"</li>
            <li>• <strong>紧急联系：</strong>立即联系可信赖的朋友或家人</li>
          </ul>
        </div>
      `:r>=2.5?`
        <div class="space-y-2">
          <h5 class="font-medium text-orange-700">⚡ 快速情绪调节</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>3-3-3呼吸法：</strong>感到压力时立即进行，激活副交感神经的放松反应</li>
            <li>• <strong>情绪暂停术：</strong>在做出反应前问自己"这真的需要我处理吗？"</li>
            <li>• <strong>快速脱身：</strong>物理离开压力环境5-10分钟</li>
            <li>• <strong>感官转移：</strong>专注于身边的5种感官体验</li>
          </ul>
        </div>
      `:`
        <div class="space-y-2">
          <h5 class="font-medium text-yellow-700">🌱 预防性情绪管理</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>深呼吸练习：</strong>每日3次，每次3分钟的深呼吸</li>
            <li>• <strong>积极暂停：</strong>感觉压力上升时，主动暂停2-3分钟</li>
            <li>• <strong>情绪标注：</strong>学会识别和命名自己的情绪状态</li>
            <li>• <strong>微型休息：</strong>每小时进行1-2分钟的伸展和放松</li>
          </ul>
        </div>
      `,G=()=>{const S=y==="high"?"进阶":y==="medium"?"基础":"入门";return S==="进阶"?`
        <div class="space-y-2">
          <h5 class="font-medium">🛡️ 进阶边界建立</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>优雅拒绝：</strong>学会用感谢+替代方案的句式拒绝请求</li>
            <li>• <strong>时间预算：</strong>为每天的重要事项分配固定时间块</li>
            <li>• <strong>能量管理：</strong>识别并保护自己的高能量时段</li>
            <li>• <strong>关系筛选：</strong>主动投入能滋养自己的关系</li>
          </ul>
        </div>
      `:S==="基础"?`
        <div class="space-y-2">
          <h5 class="font-medium">🎯 基础边界建立</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>渐进拒绝：</strong>从小的、不重要的请求开始练习说"不"</li>
            <li>• <strong>延迟回应：</strong>"我需要考虑一下再答复"</li>
            <li>• <strong>每日配额：</strong>设定每日拒绝配额，逐步增加</li>
            <li>• <strong>物理边界：</strong>设定工作时间和空间的明确界限</li>
          </ul>
        </div>
      `:`
        <div class="space-y-2">
          <h5 class="font-medium">🌱 入门边界练习</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>自我觉察：</strong>识别自己的底线和不可接受的行为</li>
            <li>• <strong>温和拒绝：</strong>使用"我现在不太方便"等委婉表达</li>
            <li>• <strong>寻求支持：</strong>请信任的朋友帮助练习设立边界</li>
            <li>• <strong>小步前进：</strong>每周设定一个小的边界目标</li>
          </ul>
        </div>
      `},K=()=>{let S=[];h>=3.5?S.push(`
        <h5 class="font-medium text-red-800">🔥 工作环境紧急重建</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>立即减负：</strong>申请减少30-50%的工作量</li>
          <li>• <strong>职位调整：</strong>考虑内部调动或职位重新定义</li>
          <li>• <strong>时间重新规划：</strong>严格执行工作时间和休息时间</li>
          <li>• <strong>寻求上级支持：</strong>坦诚沟通当前的工作压力状况</li>
          <li>• <strong>专业评估：</strong>考虑职业规划师的专业建议</li>
        </ul>
      `):h>=2.5?S.push(`
        <h5 class="font-medium text-orange-800">⚖️ 工作环境平衡重建</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>工作量协商：</strong>主动与上级沟通工作量合理性</li>
          <li>• <strong>优先级重设：</strong>重新协商工作优先级和时间节点</li>
          <li>• <strong>边界建立：</strong>设定工作时间的明确边界</li>
          <li>• <strong>效率提升：</strong>学习并应用时间管理技巧</li>
        </ul>
      `):h>=1.5&&S.push(`
        <h5 class="font-medium text-yellow-800">📈 工作环境优化</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>流程改进：</strong>优化现有工作流程，提高效率</li>
          <li>• <strong>沟通优化：</strong>改善与同事和上级的沟通方式</li>
          <li>• <strong>技能提升：</strong>学习减少工作压力的新技能</li>
          <li>• <strong>环境改善：</strong>优化工作空间，减少干扰因素</li>
        </ul>
      `),P>=3.5?S.push(`
        <h5 class="font-medium text-red-800">💔 人际关系深度重建</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>关系清理：</strong>暂时远离或减少与消耗性关系的接触</li>
          <li>• <strong>设立界限：</strong>为所有重要关系设立清晰的边界</li>
          <li>• <strong>寻求治疗：</strong>考虑家庭治疗或关系治疗</li>
          <li>• <strong>支持系统：</strong>建立新的、健康的人际支持网络</li>
          <li>• <strong>自我保护：</strong>学会在关系中保护自己的情绪健康</li>
        </ul>
      `):P>=2.5?S.push(`
        <h5 class="font-medium text-orange-800">🤝 人际关系重建</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>识别问题关系：</strong>识别和远离持续消耗您的关系</li>
          <li>• <strong>健康边界：</strong>建立健康的社交边界和距离</li>
          <li>• <strong>沟通改进：</strong>培养基于相互尊重的关系模式</li>
          <li>• <strong>真实表达：</strong>学会表达自己的真实感受和需求</li>
        </ul>
      `):P>=1.5&&S.push(`
        <h5 class="font-medium text-yellow-800">🌱 人际关系滋养</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>关系投资：</strong>主动维护和加深积极的人际关系</li>
          <li>• <strong>沟通技巧：</strong>提升倾听和表达的技巧</li>
          <li>• <strong>社交平衡：</strong>找到社交和独处的健康平衡</li>
          <li>• <strong>界限意识：</strong>培养在各种关系中的界限意识</li>
        </ul>
      `),T>=3.5?S.push(`
        <h5 class="font-medium text-purple-800">🎯 自我期待重构</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>完美主义释放：</strong>接受"足够好"而不是追求完美</li>
          <li>• <strong>自我慈悲：</strong>像对待好朋友一样对待自己</li>
          <li>• <strong>价值重定义：</strong>将自我价值与成就解绑</li>
          <li>• <strong>内在认可：</strong>培养来自内部的认可和满足感</li>
          <li>• <strong>失败重塑：</strong>将失败视为学习和成长的机会</li>
        </ul>
      `):T>=2.5&&S.push(`
        <h5 class="font-medium text-purple-700">📊 自我期待调整</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>现实期望：</strong>设定更现实和可达成的目标</li>
          <li>• <strong>成就庆祝：</strong>学会庆祝小的成就和进步</li>
          <li>• <strong>比较停止：</strong>减少与他人比较的习惯</li>
          <li>• <strong>自我肯定：</strong>每天练习积极的自我对话</li>
        </ul>
      `);const O=y==="high"?"深度":y==="medium"?"全面":"基础";return S.push(`
      <h5 class="font-medium text-green-800">🌿 ${O}生活方式重建</h5>
      <ul class="space-y-1 text-sm">
        ${O==="深度"?`
        <li>• <strong>作息彻底重构：</strong>重新设计24小时作息，优先保证睡眠质量</li>
        <li>• <strong>营养全面升级：</strong>咨询营养师，制定情绪支持性饮食计划</li>
        <li>• <strong>运动系统化：</strong>建立包含有氧、力量、柔韧性的综合运动计划</li>
        <li>• <strong>社交重新设计：</strong>重新规划社交活动，确保有足够的滋养性互动</li>
        <li>• <strong>兴趣深度发展：</strong>培养能够带来深度满足感的兴趣爱好</li>
        `:O==="全面"?`
        <li>• <strong>作息重新设计：</strong>确保充足高质量睡眠，建立规律作息</li>
        <li>• <strong>每天独处时间：</strong>每天安排30-60分钟独处时间进行情绪恢复</li>
        <li>• <strong>承诺重新评估：</strong>重新评估和减少当前的承诺和义务</li>
        <li>• <strong>定期运动放松：</strong>建立每周3-4次的运动和放松活动习惯</li>
        <li>• <strong>营养意识提升：</strong>注意饮食对情绪的影响，做出相应调整</li>
        `:`
        <li>• <strong>睡眠优化：</strong>优先保证7-8小时睡眠，建立睡前放松仪式</li>
        <li>• <strong>每日独处：</strong>每天安排20-30分钟独处时间</li>
        <li>• <strong>简单运动：</strong>每周2-3次轻度运动或散步</li>
        <li>• <strong>承诺减少：</strong>识别并减少不必要的承诺和义务</li>
        `}
      </ul>
    `),S.join("")},te=()=>{const S=r>=3?"深度":r>=2?"全面":"基础";return`
      <h5 class="font-medium">🧠 ${S}认知重构核心</h5>
      <ul class="space-y-1 text-sm">
        ${S==="深度"?`
        <li>• <strong>核心信念重塑：</strong>识别并改变导致疲惫的深层核心信念</li>
        <li>• <strong>内在批评转化：</strong>将内在批评声音转化为支持性声音</li>
        <li>• <strong>创伤模式疗愈：</strong>处理可能影响当前状态的早期创伤模式</li>
        <li>• <strong>存在意义探索：</strong>重新思考人生意义和个人价值观</li>
        <li>• <strong>自我慈悲培养：</strong>深度培养无条件的自我慈悲</li>
        `:S==="全面"?`
        <li>• <strong>自我价值重新定义：</strong>摆脱条件式自我认可，建立内在价值感</li>
        <li>• <strong>决策框架重建：</strong>建立基于内在需求和价值观的决策框架</li>
        <li>• <strong>不完美接受：</strong>学会接受自己和他人的不完美</li>
        <li>• <strong>内在支持培养：</strong>培养内在的慈悲和支持声音</li>
        `:`
        <li>• <strong>积极认知培养：</strong>练习识别和调整消极思维模式</li>
        <li>• <strong>成就重新定义：</strong>扩展对成功和成就的定义</li>
        <li>• <strong>自我接纳提升：</strong>增加对自己的理解和接纳</li>
        <li>• <strong>内在动机发现：</strong>探索和培养真正内在的动机</li>
        `}
      </ul>

      <h5 class="font-medium">🌱 ${y==="high"?"进阶":y==="medium"?"标准":"渐进"}可持续发展模式</h5>
      <ul class="space-y-1 text-sm">
        ${y==="high"?`
        <li>• <strong>情绪智能精通：</strong>深入学习情绪调节和心理韧性技能</li>
        <li>• <strong>人际关系精通：</strong>建立深度支持性的关系网络</li>
        <li>• <strong>生活意义创造：</strong>在工作和生活中主动创造意义感和价值感</li>
        <li>• <strong>持续成长心态：</strong>建立终身学习和成长的心态模式</li>
        <li>• <strong>贡献服务：</strong>通过服务他人获得更深层的满足感</li>
        `:y==="medium"?`
        <li>• <strong>定期检查系统：</strong>建立定期自我检查和情绪评估习惯</li>
        <li>• <strong>支持网络构建：</strong>形成支持性的人际关系网络</li>
        <li>• <strong>技能持续学习：</strong>持续学习情绪调节和心理韧性技能</li>
        <li>• <strong>意义价值寻求：</strong>在工作和生活中寻求意义感和价值感</li>
        `:`
        <li>• <strong>基础觉察习惯：</strong>建立简单的日常自我检查习惯</li>
        <li>• <strong>支持关系识别：</strong>识别并维护能支持自己的重要关系</li>
        <li>• <strong>基础技能学习：</strong>学习基本的情绪管理技巧</li>
        <li>• <strong>小目标设定：</strong>设定并完成小的、有意义的目标</li>
        `}
      </ul>
    `};return`
    <div class="intervention-section border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-yellow-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-yellow-200 rounded-full mr-3"></span>
        分级干预策略
        <span class="ml-auto text-sm font-normal text-yellow-700">
          疲劳等级：${r.toFixed(1)} | 韧性水平：${y==="high"?"高":y==="medium"?"中":"低"}
        </span>
      </h3>

      <div class="space-y-6">
        <!-- 短期应急策略 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">
            ${r>=3.5?"🚨 紧急危机干预":r>=2.5?"⚡ 快速缓解策略":"🌱 预防性策略"}（${r>=3.5?"立即执行":r>=2.5?"立即可用":"日常维护"}）
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            ${H()}
            ${G()}
          </div>
        </div>

        <!-- 中期重建方案 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🔄 中期重建方案（${r>=3?"3-6个月":"1-3个月"}）</h4>
          <div class="space-y-3 text-gray-700">
            ${K()}
          </div>
        </div>

        <!-- 长期预防体系 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🛡️ 长期预防体系（6-12个月）</h4>
          <div class="space-y-3 text-gray-700">
            ${te()}
          </div>
        </div>
      </div>
    </div>
  `}function c(r,d,f,y,h){const P=f.work||0,T=f.relationship||0,H=f.selfDemand||0,G=()=>r>=3.5?{title:"紧急恢复计划",subtitle:"前30天：危机干预与基础稳定",weeks:4,focus:"生存与危机管理",dailyCheck:"每日情绪危机评估（1-10分）"}:r>=2.5?{title:"强化恢复计划",subtitle:"前30天：深度修复与重建",weeks:4,focus:"修复与重建",dailyCheck:"每日情绪状态和应对效果评估"}:{title:"预防优化计划",subtitle:"前30天：习惯养成与强化",weeks:4,focus:"预防与优化",dailyCheck:"每日情绪健康和压力水平记录"},K=()=>{let b=[];return r>=3.5?b=[{week:1,title:"危机干预周",goals:[`睡眠底线：保证${h==="low"?"6-7":"7-8"}小时基础睡眠`,"情绪安全：建立每日情绪安全检查","边界保护：暂停所有非必要的承诺和义务","支持激活：联系至少2个可信赖的支持者"]},{week:2,title:"基础稳定周",goals:["作息规律：建立固定的睡眠和起床时间","情绪觉察：练习识别和命名情绪状态","基础运动：每天10-15分钟温和散步","营养支持：确保每日三餐规律饮食"]},{week:3,title:"能量恢复周",goals:["独处时间：每天安排30-45分钟完全独处","放松技术：学习2-3种放松技巧","兴趣恢复：重新接触一个能带来小愉悦的活动","社交筛选：减少与消耗性关系的接触"]},{week:4,title:"功能重建周",goals:["轻度责任：承担1-2个简单的日常责任","计划制定：制定简单的下周计划","成就感体验：完成1个小目标并庆祝","专业咨询：预约第一次专业咨询（如果需要）"]}]:r>=2.5?b=[{week:1,title:"评估与准备周",goals:[`睡眠目标：每晚${h==="low"?"7-8":"8-9"}小时高质量睡眠`,"边界练习：每周练习拒绝3-4个不合理请求","独处时间：每天安排30-45分钟独处恢复时间","运动习惯：开始每周3次轻度运动或散步"]},{week:2,title:"习惯建立周",goals:["情绪日记：开始记录每日情绪状态和触发因素","正念练习：每天10分钟正念冥想或呼吸练习","营养优化：注意饮食对情绪的影响，做出调整","社交平衡：评估并调整社交活动频率"]},{week:3,title:"技能发展周",goals:["沟通技巧：练习表达自己的感受和需求","时间管理：学习并应用基本的时间管理技巧","压力识别：识别主要的压力源和应对策略","自我慈悲：练习对待自己的慈悲和理解"]},{week:4,title:"整合强化周",goals:["综合应用：整合前几周学到的技能","预防意识：识别可能的压力触发情况","支持系统：建立和维护支持性的人际关系","长期规划：思考并设定未来1-3个月的目标"]}]:b=[{week:1,title:"觉察增强周",goals:[`睡眠优化：保持${h==="high"?"7-8":"8-9"}小时规律睡眠`,"情绪觉察：提高对日常情绪变化的敏感度","能量管理：识别并保护高能量时段","预防练习：每周练习预防性放松2-3次"]},{week:2,title:"边界强化周",goals:["边界练习：在各种关系中练习设立健康边界","主动拒绝：主动识别和拒绝不合理的要求","时间保护：保护和 prioritizing 重要时间","关系投资：投入时间和精力于滋养性关系"]},{week:3,title:"技能精进周",goals:["高级放松：学习更高级的放松和冥想技巧","压力转化：将压力转化为成长动力的技巧","意义寻找：探索和深化生活的意义和目的","韧性建设：有意锻炼心理韧性和抗压能力"]},{week:4,title:"平衡发展周",goals:["工作生活平衡：优化工作与生活的平衡","兴趣发展：培养能带来深层满足感的兴趣","社会贡献：考虑如何为社会做出有意义的贡献","持续成长：建立终身学习和成长的 mindset"]}],P>=3&&b.forEach(V=>{V.goals.push("工作减负：逐步减少工作负担和压力")}),T>=3&&b.forEach(V=>{V.goals.push("关系修复：每周投入时间修复健康关系")}),H>=3&&b.forEach(V=>{V.goals.push("期望调整：每周练习调整自我期待")}),b},te=()=>{let b={books:[],tools:[],apps:[],professional:[]};const pe={过度付出型:["《不完美的礼物》- Brené Brown","《自我慈悲》- Kristin Neff","《过劳》- Anna Katharina Schaffner"],高压消耗型:["《压力管理》- Hans Selye","《为什么我们这么累》- Hans-Peter Hagemeyer","《减压生活》- 哈佛医学院"],情感耗竭型:["《情绪的语言》- Brene Brown","《情绪急救》- Guy Winch","《情绪疗愈》- Karla McLaren"],意义缺失型:["《活出生命的意义》- Viktor Frankl","《第二座山》- David Brooks","《心流》- Mihaly Csikszentmihalyi"]}[d==null?void 0:d.type]||[];return r>=3.5?(b.books=["《情绪耗竭：识别与预防》- Herbert Freudenberger","《身体从未忘记》- Bessel van der Kolk","《创伤与复原》- Judith Herman",...pe],b.tools=["危机干预热线电话保存","紧急联系人清单制定","情绪危机应对卡片","安全空间创建指南"],b.professional=["心理治疗师一对一咨询","精神科医生评估","危机干预热线","心理健康支持小组"]):r>=2.5?(b.books=["《过劳与自我照顾》- Christina Maslach","《复原力》- Andrew Shatté","《内在工程》- Sadhguru",...pe],b.tools=["情绪日记模板","正念冥想引导音频","压力评估量表","时间管理工具"],b.professional=["心理咨询师会谈","生活教练指导","工作坊和培训课程","同伴支持小组"]):(b.books=["《习惯的力量》- Charles Duhigg","《原子习惯》- James Clear","《心流》- Mihaly Csikszentmihalyi",...pe],b.tools=["目标设定工作表","习惯追踪器","冥想和正念App","时间块规划工具"],b.professional=["个人发展教练","职业规划咨询","技能培训课程","兴趣工作坊"]),h==="low"?b.apps=["Calm - 深度冥想和睡眠辅助","Headspace - 正念冥想入门指导","Insight Timer - 冥想社区和引导","Talkspace - 在线心理咨询"]:h==="medium"?b.apps=["Waking Up - 高级正念练习","Ten Percent Happier - 实用冥想技巧","Moodpath - 心理健康追踪","Daylio - 情绪日记"]:b.apps=["Streaks - 习惯追踪","Forest - 专注时间管理","Notion - 生活和工作管理","Audible - 有声书学习平台"],b},S=()=>{const b=["持续的情绪低落或焦虑超过2周","睡眠问题严重影响日常生活","工作或人际关系明显恶化","身体症状持续不减"];return r>=3.5?[...b,"出现自我伤害或自杀的想法","无法完成基本日常生活任务","与现实脱节或出现幻觉"," substance use to cope with emotions"]:r>=2.5?[...b,"感到绝望和无助","社交隔离和孤独感严重","身体症状反复出现","应对策略完全失效"]:["情绪波动影响生活质量","重要关系出现持续问题","职业发展受到阻碍","个人成长停滞不前"]},O=G(),ue=K(),J=te(),ge=S();return`
    <div class="actionplan-section border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-indigo-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-indigo-200 rounded-full mr-3"></span>
        个性化行动方案
        <span class="ml-auto text-sm font-normal text-indigo-700">
          ${O.title} | 疲劳等级：${r.toFixed(1)}
        </span>
      </h3>

      <div class="space-y-6">
        <!-- ${O.subtitle} -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-200">
          <h4 class="font-semibold text-indigo-900 mb-3">📅 ${O.subtitle}</h4>
          <div class="space-y-4 text-gray-700">
            <div class="bg-indigo-50 p-3 rounded-lg">
              <p class="text-indigo-800 text-sm font-medium">🎯 核心焦点：${O.focus}</p>
            </div>

            ${ue.map(b=>`
            <div class="border-l-4 border-indigo-100 pl-4">
              <h5 class="font-medium text-indigo-800 mb-2">${b.week}：${b.title}</h5>
              <ul class="space-y-1 text-sm text-gray-600">
                ${b.goals.map(V=>`<li>• ${V}</li>`).join("")}
              </ul>
            </div>
            `).join("")}

            <div class="mt-4 p-3 bg-gray-50 rounded-lg">
              <h5 class="font-medium mb-2">📝 ${O.dailyCheck}</h5>
              <p class="text-sm text-gray-600">
                每天晚上花5-10分钟记录今天的情绪状态、主要挑战、成功应对的地方，以及明天可以改进的地方。
                这有助于增强自我觉察能力，及早发现潜在问题。
              </p>
            </div>

            ${r>=3?`
            <div class="mt-4 p-3 bg-red-50 rounded-lg border-l-4 border-red-200">
              <h5 class="font-medium text-red-800 mb-2">🚨 紧急预案</h5>
              <ul class="space-y-1 text-sm text-red-700">
                <li>• 识别可能的情绪触发情况，提前准备应对策略</li>
                <li>• 建立"安全网"：当情绪危机时联系的人员名单</li>
                <li>• 准备情绪急救工具包：舒缓音乐、芳香疗法、安抚物品</li>
                <li>• 设定明确的"求助信号"和寻求帮助的条件</li>
              </ul>
            </div>
            `:`
            <div class="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-200">
              <h5 class="font-medium text-yellow-800 mb-2">⚡ 预防预案</h5>
              <p class="text-sm text-yellow-700">
                识别可能的压力触发情况，提前准备应对策略，避免陷入被动的情绪反应模式。
                建立自我检查机制，定期评估预防措施的有效性。
              </p>
            </div>
            `}
          </div>
        </div>

        <!-- 个性化专业资源推荐 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-200">
          <h4 class="font-semibold text-indigo-900 mb-3">📚 为您定制的专业资源</h4>
          <div class="space-y-4 text-gray-700">
            <div>
              <h5 class="font-medium mb-2">📖 针对性书籍推荐</h5>
              <ul class="space-y-1 text-sm">
                ${J.books.map(b=>`<li>• ${b}</li>`).join("")}
              </ul>
            </div>

            <div>
              <h5 class="font-medium mb-2">🛠️ 实用工具和练习</h5>
              <ul class="space-y-1 text-sm">
                ${J.tools.map(b=>`<li>• ${b}</li>`).join("")}
              </ul>
            </div>

            <div>
              <h5 class="font-medium mb-2">📱 推荐应用程序</h5>
              <ul class="space-y-1 text-sm">
                ${J.apps.map(b=>`<li>• ${b}</li>`).join("")}
              </ul>
            </div>

            <div>
              <h5 class="font-medium mb-2">👨‍⚕️ 专业支持资源</h5>
              <ul class="space-y-1 text-sm">
                ${J.professional.map(b=>`<li>• ${b}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>

        <!-- 何时寻求专业帮助 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-orange-200">
          <h4 class="font-semibold text-orange-900 mb-3">⚠️ 何时寻求专业帮助</h4>
          <div class="space-y-3">
            <div class="bg-orange-50 p-3 rounded border-l-4 border-orange-200">
              <p class="text-orange-800 text-sm font-medium">
                ${r>=3.5?"🚨 立即寻求帮助：":r>=2.5?"⚡ 考虑寻求帮助：":"💡 建议寻求帮助："}
              </p>
              <p class="text-orange-700 text-sm mt-1">出现以下任一情况时</p>
            </div>
            <ul class="space-y-1 text-sm text-orange-700">
              ${ge.map(b=>`<li>• ${b}</li>`).join("")}
            </ul>
            ${r>=3.5?`
            <div class="mt-3 p-2 bg-red-100 rounded text-red-800 text-sm">
              <strong>紧急联系方式：</strong>如果您处于严重困境中，请立即拨打心理援助热线或前往最近的医院急诊科。
            </div>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `}function v(r,d,f){const y=r>=3?"高风险":r>=2?"中等风险":"低风险",h=d==="high"?8:d==="medium"?5:2;return`
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
                <p class="text-2xl font-bold ${y==="高风险"?"text-red-600":y==="中等风险"?"text-orange-600":"text-green-600"}">${y}</p>
              </div>

              <div class="text-center">
                <p class="font-medium">功能影响程度</p>
                <p class="text-2xl font-bold text-orange-600">${r>=3?"严重":r>=2?"中等":"轻度"}</p>
              </div>

              <div class="text-center">
                <p class="font-medium">紧急程度</p>
                <p class="text-2xl font-bold ${r>=3?"text-red-600":r>=2?"text-orange-600":"text-yellow-600"}">${r>=3?"高":r>=2?"中":"低"}</p>
              </div>
            </div>

            ${r>=2?`
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
            <p><strong>心理韧性评分：</strong>${h}/10 分</p>
            <p><strong>预计恢复时间：</strong>${d==="high"?"3-6个月":d==="medium"?"6-12个月":"12-18个月"}</p>
            <p><strong>成功关键因素：</strong>持续的自我觉察、有效的应对策略、支持性的人际环境、专业帮助的及时介入。</p>

            <p><strong>潜在障碍：</strong>${d==="low"?"心理韧性不足，抗压能力较弱":"当前应对策略效果递减，需要新的模式"}</p>
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
  `}return Be(()=>t.currentQuestionIndex,(r,d)=>{Math.abs(r-d)>1&&console.log(`Jumped to question ${r+1}`)}),he(()=>{t.currentStep!=="questionnaire"&&a.push("/"),t.restoreAnswers()}),(r,d)=>(g(),p("div",Rt,[e("div",Ot,[e("div",Lt,[e("div",zt,[d[3]||(d[3]=e("div",null,[e("h1",{class:"text-lg font-bold text-gray-900"},"情绪疲惫度测试"),e("p",{class:"text-xs text-gray-600 mt-1"},"请根据您最近的真实感受回答")],-1)),e("div",Ht,[e("div",Vt,u(E(t).progress)+"%",1),d[2]||(d[2]=e("div",{class:"text-xs text-gray-500"},"完成度",-1))])]),e("div",Wt,[re(nt,{"answered-count":E(t).answeredCount,"total-questions":E(t).totalQuestions,"show-eta":!0},null,8,["answered-count","total-questions"])]),d[4]||(d[4]=e("div",{class:"mt-2 p-2 bg-amber-50 border border-amber-200 rounded-lg"},[e("p",{class:"text-amber-700 text-xs leading-relaxed"},[e("strong",null,"量表说明："),oe("本量表参考情绪耗竭（Emotional Exhaustion）、职业倦怠（Burnout）及主观疲劳相关研究思路编制，用于日常自我觉察，不作为医疗或心理诊断依据。 ")])],-1))])]),e("div",Gt,[$.value?(g(),p("div",Kt,[e("h2",Jt,u($.value.title),1),e("p",Ut,u($.value.description),1)])):F("",!0),e("div",Yt,[re(fe,{name:"question-slide",mode:"out-in"},{default:me(()=>[m.value?(g(),xe(_t,{key:m.value.id,question:m.value,"question-number":E(t).currentQuestionIndex+1,"category-label":Q(m.value),"model-value":E(t).answers[m.value.id],"onUpdate:modelValue":R,onAnswerSelected:x,onAutoNext:q},null,8,["question","question-number","category-label","model-value"])):(g(),p("div",Xt,[...d[5]||(d[5]=[e("div",{class:"text-gray-500 text-lg"},"题目加载中...",-1)])]))]),_:1})])]),e("div",Zt,[re(Ft,{questions:l.value,"current-index":E(t).currentQuestionIndex,answers:E(t).answers,onGoToQuestion:L,onGoPrevious:X,onGoNext:Z,onSubmit:ee},null,8,["questions","current-index","answers"])]),d[13]||(d[13]=e("div",{class:"h-20"},null,-1)),s.value?(g(),p("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",onClick:d[1]||(d[1]=Ae(f=>s.value=!1,["self"]))},[e("div",es,[d[11]||(d[11]=e("h3",{class:"text-xl font-bold text-gray-900 mb-4"},"确认提交测试",-1)),e("div",ts,[e("div",ss,[d[8]||(d[8]=e("h4",{class:"font-medium text-blue-900 mb-2"},"测试完成情况",-1)),e("div",os,[e("div",rs,[d[6]||(d[6]=e("span",null,"整体进度:",-1)),e("span",ns,u(E(t).answeredCount)+" / "+u(E(t).totalQuestions)+" 题",1)]),e("div",is,[d[7]||(d[7]=e("span",null,"预计用时:",-1)),e("span",as,u(Math.round((E(t).duration||0)/60))+" 分钟",1)])])]),k.value.warnings.length>0?(g(),p("div",ls,[e("div",ds,[d[10]||(d[10]=e("h4",{class:"font-medium text-yellow-900 mb-2"},"注意事项",-1)),e("ul",cs,[(g(!0),p(j,null,N(k.value.warnings,f=>(g(),p("li",{key:f,class:"flex items-start"},[d[9]||(d[9]=e("span",{class:"text-yellow-600 mr-2"},"⚠️",-1)),e("span",null,u(f),1)]))),128))])])])):F("",!0)]),e("div",us,[e("button",{onClick:d[0]||(d[0]=f=>s.value=!1),class:"btn btn-secondary flex-1"}," 再检查一下 "),e("button",{onClick:M,disabled:o.value,class:"btn btn-primary flex-1"},[o.value?(g(),p("span",ms,"生成报告中")):(g(),p("span",ps,"确认提交"))],8,gs)])])])):F("",!0),o.value?(g(),p("div",vs,[...d[12]||(d[12]=[U('<div class="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center" data-v-02ab7b37><div class="mb-6" data-v-02ab7b37><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4" data-v-02ab7b37><svg class="w-8 h-8 text-primary-600 animate-spin" fill="none" viewBox="0 0 24 24" data-v-02ab7b37><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-02ab7b37></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-02ab7b37></path></svg></div><h3 class="text-xl font-bold text-gray-900 mb-2" data-v-02ab7b37>正在生成您的个性化报告</h3><p class="text-gray-600" data-v-02ab7b37>请稍候，我们正在分析您的答案并生成专属报告...</p></div><div class="space-y-2 text-sm text-gray-500" data-v-02ab7b37><div class="flex items-center justify-center gap-2" data-v-02ab7b37><span class="loading-dots" data-v-02ab7b37>计算疲惫等级</span></div><div class="flex items-center justify-center gap-2" data-v-02ab7b37><span class="loading-dots" data-v-02ab7b37>分析疲惫来源</span></div><div class="flex items-center justify-center gap-2" data-v-02ab7b37><span class="loading-dots" data-v-02ab7b37>生成个性化建议</span></div></div></div>',1)])])):F("",!0)]))}}),hs=Y(bs,[["__scopeId","data-v-02ab7b37"]]),fs={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"},xs={class:"bg-white shadow-sm border-b border-gray-200"},ys={class:"max-w-5xl mx-auto px-4 py-6"},ws={class:"flex items-center justify-between"},_s={class:"text-gray-600 mt-1"},$s={key:0,class:"max-w-5xl mx-auto px-4 py-8"},Cs={class:"result-card featured mb-8 animate-fade-in"},ks={class:"text-center"},Ss={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full"},Bs={class:"text-center p-6 bg-blue-50 rounded-lg border border-blue-200 h-full flex flex-col justify-between"},As={class:"mb-3"},Ts={class:"text-lg font-semibold text-blue-800 mb-1"},qs={class:"text-xs text-blue-600"},Is={class:"metric-progress-bar mb-3"},Ds={class:"font-medium text-blue-900"},Qs={class:"text-center p-6 bg-orange-50 rounded-lg border border-orange-200 h-full flex flex-col justify-between"},Ms={class:"mb-3"},js={class:"text-lg font-semibold text-orange-800 mb-1"},Ps={class:"text-xs text-orange-600"},Es={class:"metric-progress-bar mb-3"},Ns={class:"font-medium text-orange-900"},Fs={class:"text-center p-6 bg-green-50 rounded-lg border border-green-200 h-full flex flex-col justify-between"},Rs={class:"mb-3"},Os={class:"text-lg font-semibold text-green-800 mb-1"},Ls={class:"text-xs text-green-600"},zs={class:"metric-progress-bar mb-3"},Hs={class:"font-medium text-green-900"},Vs={class:"result-card animate-fade-in",style:{"animation-delay":"0.5s"}},Ws={class:"flex flex-wrap gap-2 justify-center md:gap-3 lg:gap-4"},Gs={class:"grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 w-full"},Ks={class:"analysis-card animate-fade-in",style:{"animation-delay":"0.1s"}},Js={class:"card-content"},Us={class:"type-item primary"},Ys={class:"type-header"},Xs={class:"type-name"},Zs={class:"type-badge primary"},eo={class:"type-description"},to={class:"type-section"},so={class:"feature-list"},oo={class:"type-section"},ro={class:"advice-list"},no={key:0,class:"type-item secondary"},io={class:"type-header"},ao={class:"type-name"},lo={class:"type-badge secondary"},co={class:"type-description"},uo={class:"analysis-card animate-fade-in",style:{"animation-delay":"0.2s"}},go={class:"card-content"},po={class:"scene-header"},mo={class:"scene-name"},vo={class:"scene-score"},bo={class:"progress-bar"},ho={class:"scene-advice"},fo={class:"analysis-card animate-fade-in",style:{"animation-delay":"0.3s"}},xo={class:"card-content"},yo={class:"recovery-result"},wo={class:"recovery-description"},_o={class:"metrics-section"},$o={class:"metrics-grid"},Co={class:"metric-item"},ko={class:"metric-stars"},So={class:"metric-item"},Bo={class:"metric-stars"},Ao={class:"metric-item"},To={class:"metric-stars"},qo={class:"metric-item"},Io={class:"metric-stars"},Do={class:"improvement-section"},Qo={class:"improvement-list"},Mo={key:0,class:"max-w-6xl mx-auto px-4 py-8 animate-fade-in"},jo={class:"professional-advice-enhanced"},Po={class:"report-main-content"},Eo={class:"content-wrapper"},No={class:"report-content-enhanced"},Fo={class:"content-inner"},Ro=["innerHTML"],Oo={key:1,class:"max-w-2xl mx-auto px-4 py-16 text-center"},Lo=W({__name:"Results",setup(i){const a=le(),t=ie(),o=D(()=>t.result),s=n=>{if(n===null)return"未知";const c=Math.floor(n/60),v=n%60;return v>0?`${c}分${v}秒`:`${c}分钟`},l=n=>Fe[n]||n,m=n=>n>=4?"text-red-600 font-bold":n>=3.5?"text-orange-600 font-semibold":n>=2.5?"text-yellow-600 font-medium":"text-green-600",$=n=>n>=4?"bg-red-500":n>=3.5?"bg-orange-500":n>=2.5?"bg-yellow-500":"bg-green-500",k=n=>n>=4?"高压":n>=3.2?"偏高":n>=2.4?"中等":"较低",Q=n=>n>=4?"bg-red-100 text-red-800 border border-red-200":n>=3.2?"bg-orange-100 text-orange-800 border border-orange-200":n>=2.4?"bg-yellow-100 text-yellow-800 border border-yellow-200":"bg-green-100 text-green-800 border border-green-200",R=(n,c)=>{const v=l(c).toLowerCase();return v.includes("工作")?n>=4?"立即暂停手头任务，拆解复杂工作，确保充足睡眠；必要时向领导反映工作量或寻求同事协助":n>=3.2?"合理安排工作优先级，为重要任务预留缓冲时间，主动与团队沟通协作分工":n>=2.4?"采用番茄工作法，定时休息，保持工作节奏，确保基本休息和放松":"保持当前良好习惯，适当安排工作间隙的轻度运动或冥想放松":v.includes("家庭")?n>=4?"立即与家人沟通当前状态，合理分配家庭责任，必要时寻求亲友帮助或专业家庭咨询":n>=3.2?'明确家庭角色边界，学会适当说"不"，建立家庭责任分担机制':n>=2.4?"定期与家人沟通交流，共同制定家庭计划，合理安排家庭和个人时间":"维持和谐的家庭关系，保持良好的家庭沟通习惯":v.includes("社交")?n>=4?"减少不必要的社交活动，专注于核心社交关系，必要时寻求心理咨询师帮助":n>=3.2?"选择性参加社交活动，学会拒绝过度社交邀约，注重社交质量而非数量":n>=2.4?"平衡独处和社交时间，选择让自己舒适的社交场合，设定社交边界":"保持积极的社交状态，继续维护健康的社交关系":v.includes("健康")||v.includes("身体")?n>=4?"立即就医检查身体状态，暂停高强度运动，保证充足睡眠和营养摄入":n>=3.2?"定期体检，合理安排运动强度和时间，保证规律作息和健康饮食":n>=2.4?"坚持适度运动，注意身体信号，保持健康的生活习惯":"继续保持健康生活方式，关注身体状况变化":v.includes("财务")||v.includes("经济")?n>=4?"寻求专业理财师帮助，重新规划财务目标，暂时避免重大财务决策":n>=3.2?"制定详细预算计划，增加收入渠道，控制不必要开支":n>=2.4?"定期检视财务状况，合理规划支出，建立应急储蓄":"保持良好理财习惯，持续关注财务健康":v.includes("学习")||v.includes("成长")?n>=4?"调整学习目标和计划，避免过度学习焦虑，寻求导师或同学的帮助指导":n>=3.2?"制定合理学习计划，采用高效学习方法，寻求学习伙伴支持":n>=2.4?"保持规律的学习节奏，注重劳逸结合，定期复习巩固":"保持学习动力，持续提升专业技能":n>=4?"立即安排短暂停顿，分析压力来源，拆解问题；必要时寻求专业支持和帮助":n>=3.2?"预留充足时间缓冲，明确优先级，主动寻求他人协助和建议":n>=2.4?"保持良好的节奏和习惯，定期进行自我检查和调整":"维持当前良好状态，注重日常保养和预防"},x=n=>{switch(n){case"low":return"bg-red-100 text-red-800 border border-red-200";case"medium":return"bg-yellow-100 text-yellow-800 border border-yellow-200";case"high":return"bg-green-100 text-green-800 border border-green-200";default:return"bg-gray-100 text-gray-800 border border-gray-200"}},q=n=>{switch(n){case"low":return"2.5/10";case"medium":return"6.5/10";case"high":return"8.5/10";default:return"5.0/10"}},L=n=>({type_emotional_overload:"高敏感高共情类型，容易吸收他人情绪而承担心理负担",type_responsibility_trap:"责任绑架型，习惯承担过多责任和义务",type_comparison_anxiety:"对比焦虑型，容易与他人比较而产生自我压力",type_high_pressure_mode:"高压运转型，习惯高强度快节奏的工作生活模式"})[n]||"综合压力型",X=n=>{switch(n){case"low":return"您的心理韧性较低，在面对压力时容易感到疲惫，建议积极学习压力管理技巧，必要时寻求专业支持来提升应对能力。";case"medium":return"您的心理韧性处于中等水平，有一定的抗压能力，但在持续压力下仍可能出现疲惫。建议加强自我调节训练，建立更好的压力应对机制。";case"high":return"您的心理韧性较强，能够在面对压力时保持相对稳定的情绪状态，并具备良好的自我调节能力。建议继续保持现有的压力管理习惯。";default:return"您的心理韧性水平正常，建议关注自身压力状态，适时进行调整和恢复。"}},Z=n=>({type_emotional_overload:["容易被他人情绪影响，感到情绪负担重",'在团队中经常承担"情绪垃圾桶"角色',"下班后仍难以从工作压力中抽离","过度共情导致个人边界模糊"],type_responsibility_trap:["习惯性承担超出职责范围的工作","难以拒绝他人的请求，害怕让他人失望","凡事亲力亲为，不善于 delegating","责任感过强，自我要求过高"],type_comparison_anxiety:["频繁与他人比较，产生自我怀疑","过度关注他人的成就和评价","社交媒体使用后感到焦虑和不足","对自己要求过高，追求完美主义"],type_high_pressure_mode:["习惯高强度快节奏的工作生活方式","难以放松，总觉得有事情需要处理",'长期处于"战斗或逃跑"的应激状态',"忽略了身体和心理的恢复需求"]})[n]||["表现出综合性的压力症状","工作和生活平衡失调","需要全面提升自我管理能力"],ee=n=>({type_emotional_overload:["建立情绪边界，学会适度共情","定期进行情绪释放活动（运动、冥想）","培养理性思考习惯，减少情绪内耗"],type_responsibility_trap:["学会合理拒绝，明确个人边界","培养团队协作意识，合理分配任务",'调整完美主义倾向，接受"足够好"的标准'],type_comparison_anxiety:["专注于个人成长，而非外在比较","减少社交媒体使用时间，培养现实社交","建立自我价值感，基于内在标准而非外界评价"],type_high_pressure_mode:["刻意练习放慢节奏，培养耐心","建立规律的作息和运动习惯","学会识别和尊重身体的疲劳信号"]})[n]||["建立健康的生活节奏","学习压力管理技巧","培养自我关怀的习惯"],M=n=>({emotional:n==="high"?4:n==="medium"?3:2,recovery:n==="high"?4:n==="medium"?2:1,problem_solving:n==="high"?4:n==="medium"?3:2,social_support:n==="high"||n==="medium"?3:2}),_=n=>{switch(n){case"low":return["加强正念冥想训练，提升情绪觉察","建立完善的社会支持网络","学习专业的压力管理技巧","培养健康的生活习惯"];case"medium":return["深化情绪调节技能训练","扩大社交支持系统","定期进行自我反思和成长","建立更有效的应对机制"];case"high":return["继续保持现有的良好习惯","学习更高级的压力管理技巧","帮助他人建立心理韧性","追求更高层次的心理健康"];default:return["关注自身心理状态变化","建立基础的压力管理习惯","培养积极的思维模式"]}},B=n=>n>=90?{level:"高度匹配",color:"green",textColor:"text-green-600",barColor:"bg-green-500"}:n>=75?{level:"较好匹配",color:"blue",textColor:"text-blue-600",barColor:"bg-blue-500"}:n>=60?{level:"一般匹配",color:"yellow",textColor:"text-yellow-600",barColor:"bg-yellow-500"}:{level:"匹配度低",color:"gray",textColor:"text-gray-600",barColor:"bg-gray-500"},C=n=>n>=4?{level:"高压状态",color:"red",textColor:"text-red-600",barColor:"bg-red-500",percentage:n/5*100}:n>=3?{level:"中等偏高",color:"orange",textColor:"text-orange-600",barColor:"bg-orange-500",percentage:n/5*100}:n>=2?{level:"中等水平",color:"yellow",textColor:"text-yellow-600",barColor:"bg-yellow-500",percentage:n/5*100}:{level:"压力较低",color:"green",textColor:"text-green-600",barColor:"bg-green-500",percentage:n/5*100},z=n=>{switch(n){case"high":return{level:"韧性较强",textColor:"text-green-600",barColor:"bg-green-500",percentage:85};case"medium":return{level:"韧性中等",textColor:"text-yellow-600",barColor:"bg-yellow-500",percentage:65};case"low":return{level:"韧性较弱",textColor:"text-red-600",barColor:"bg-red-500",percentage:25};default:return{level:"韧性一般",textColor:"text-gray-600",barColor:"bg-gray-500",percentage:50}}},I=()=>{t.restart(),a.push("/")},de=n=>{if(!n)return"";try{let c=n;const v=n.match(/(<h[^>]*>.*?行为模式深度解读.*?<\/h[^>]*>[\s\S]*?)(?=<h[^>]*>|$)/i);if(v){console.log("找到行为模式深度解读部分");const d=v[1].match(/<ul[\s\S]*?<\/ul>/gi);if(d&&d.length>=2){console.log("找到列表数量:",d.length);const f=`
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
              ${d[0].replace(/<ul[^>]*>/g,'<ul style="margin: 0; padding: 0; list-style: none; width: 100%;">').replace(/<li>/g,'<li style="background: rgba(59, 130, 246, 0.05); border-left: 3px solid #3b82f6; border-radius: 8px; padding: 0.75rem 1rem; margin: 0.5rem 0; font-size: 0.875rem; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word;">')}
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
              ${d[1].replace(/<ul[^>]*>/g,'<ul style="margin: 0; padding: 0; list-style: none; width: 100%;">').replace(/<li>/g,'<li style="background: rgba(236, 72, 153, 0.05); border-left: 3px solid #ec4899; border-radius: 8px; padding: 0.75rem 1rem; margin: 0.5rem 0; font-size: 0.875rem; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word;">')}
            </div>
          </div>
        `,y=v.index||0,h=y+v[0].length,T=n.substring(y,h).replace(/<h[^>]*>.*?行为模式深度解读.*?<\/h[^>]*>[\s\S]*?(?=<h[^>]*>|$)/i,`$1${f}`);c=n.substring(0,y)+T+n.substring(h)}}return c}catch(c){return console.error("处理报告内容时出错:",c),n}},ce=()=>{a.push("/")};return(n,c)=>(g(),p("div",fs,[e("div",xs,[e("div",ys,[e("div",ws,[e("div",null,[c[0]||(c[0]=e("h1",{class:"text-3xl font-bold text-gray-900"},"情绪疲惫度测试结果",-1)),e("p",_s," 测试时间: "+u(s(E(t).duration))+" · "+u(new Date().toLocaleDateString()),1)]),e("button",{onClick:I,class:"btn btn-secondary"}," 重新测试 ")])])]),o.value?(g(),p("div",$s,[e("div",Cs,[e("div",ks,[e("div",{class:A(["inline-flex items-center px-6 py-3 rounded-full text-lg font-bold mb-4",`fatigue-${o.value.fatigueLevel}`])},u(o.value.fatigueLabel),3),e("div",Ss,[e("div",Bs,[e("div",As,[e("div",Ts,u(B(o.value.primaryType.matchScore).level),1),e("div",qs,u(o.value.primaryType.matchScore)+"% 匹配度",1)]),e("div",Is,[e("div",{class:A(["metric-progress-fill",B(o.value.primaryType.matchScore).barColor]),style:se({width:o.value.primaryType.matchScore+"%"})},null,6)]),e("div",Ds,u(o.value.primaryType.name),1)]),e("div",Qs,[e("div",Ms,[e("div",js,u(C(o.value.sceneScores.work).level),1),e("div",Ps,u(o.value.sceneScores.work.toFixed(1))+"/5.0 压力指数",1)]),e("div",Es,[e("div",{class:A(["metric-progress-fill",C(o.value.sceneScores.work).barColor]),style:se({width:C(o.value.sceneScores.work).percentage+"%"})},null,6)]),e("div",Ns,u(k(o.value.sceneScores.work)),1)]),e("div",Fs,[e("div",Rs,[e("div",Os,u(z(o.value.recoveryLevel).level),1),e("div",Ls,u(q(o.value.recoveryLevel))+" 韧性评分",1)]),e("div",zs,[e("div",{class:A(["metric-progress-fill",z(o.value.recoveryLevel).barColor]),style:se({width:z(o.value.recoveryLevel).percentage+"%"})},null,6)]),e("div",Hs,u(o.value.recoveryLabel),1)])]),e("div",Vs,[c[1]||(c[1]=e("h3",{class:"text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2"},[e("span",{class:"w-2 h-2 bg-purple-500 rounded-full"}),oe(" 个人特征标签 ")],-1)),e("div",Ws,[(g(!0),p(j,null,N(o.value.personalTags,v=>(g(),p("span",{key:v,class:"px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"},u(v),1))),128))])])])]),e("div",Gs,[e("div",Ks,[c[4]||(c[4]=e("div",{class:"card-header"},[e("span",{class:"header-dot bg-blue-500"}),e("h3",{class:"card-title"},"疲惫类型分析")],-1)),e("div",Js,[e("div",Us,[e("div",Ys,[e("h4",Xs,u(o.value.primaryType.name),1),e("span",Zs,"主要 "+u(o.value.primaryType.matchScore)+"%",1)]),e("p",eo,u(L(o.value.primaryType.code)),1),e("div",to,[c[2]||(c[2]=e("h5",{class:"section-title"},"🎯 典型表现",-1)),e("ul",so,[(g(!0),p(j,null,N(Z(o.value.primaryType.code),v=>(g(),p("li",{key:v},u(v),1))),128))])]),e("div",oo,[c[3]||(c[3]=e("h5",{class:"section-title"},"💡 改善方向",-1)),e("ul",ro,[(g(!0),p(j,null,N(ee(o.value.primaryType.code),v=>(g(),p("li",{key:v},u(v),1))),128))])])]),o.value.secondaryType&&o.value.secondaryType.code!==o.value.primaryType.code?(g(),p("div",no,[e("div",io,[e("h4",ao,u(o.value.secondaryType.name),1),e("span",lo,"次要 "+u(o.value.secondaryType.matchScore)+"%",1)]),e("p",co,u(L(o.value.secondaryType.code)),1)])):F("",!0)])]),e("div",uo,[c[5]||(c[5]=e("div",{class:"card-header"},[e("span",{class:"header-dot bg-orange-500"}),e("h3",{class:"card-title"},"场景压力分析")],-1)),e("div",go,[(g(!0),p(j,null,N(o.value.sceneScores,(v,r)=>(g(),p("div",{key:r,class:"scene-item"},[e("div",po,[e("span",mo,u(l(r)),1),e("div",vo,[e("span",{class:A(["score-text",m(v)])},u(v.toFixed(1)),3),e("span",{class:A(["pressure-badge",Q(v)])},u(k(v)),3)])]),e("div",bo,[e("div",{class:A(["progress-fill",$(v)]),style:se({width:`${v/5*100}%`})},null,6)]),e("div",ho,u(R(v,r)),1)]))),128))])]),e("div",fo,[c[12]||(c[12]=e("div",{class:"card-header"},[e("span",{class:"header-dot bg-green-500"}),e("h3",{class:"card-title"},"心理韧性评估")],-1)),e("div",xo,[e("div",yo,[e("div",{class:A(["recovery-badge",x(o.value.recoveryLevel)])},u(o.value.recoveryLabel),3),e("div",wo,u(X(o.value.recoveryLevel)),1)]),e("div",_o,[c[10]||(c[10]=e("h5",{class:"section-title"},"📊 韧性指标分析",-1)),e("div",$o,[e("div",Co,[c[6]||(c[6]=e("div",{class:"metric-label"},"情绪调节",-1)),e("div",ko,[(g(),p(j,null,N(5,v=>e("span",{key:v,class:A(["star",v<=M(o.value.recoveryLevel).emotional?"filled":""])}," ★ ",2)),64))])]),e("div",So,[c[7]||(c[7]=e("div",{class:"metric-label"},"恢复速度",-1)),e("div",Bo,[(g(),p(j,null,N(5,v=>e("span",{key:v,class:A(["star",v<=M(o.value.recoveryLevel).recovery?"filled":""])}," ★ ",2)),64))])]),e("div",Ao,[c[8]||(c[8]=e("div",{class:"metric-label"},"问题解决",-1)),e("div",To,[(g(),p(j,null,N(5,v=>e("span",{key:v,class:A(["star",v<=M(o.value.recoveryLevel).problem_solving?"filled":""])}," ★ ",2)),64))])]),e("div",qo,[c[9]||(c[9]=e("div",{class:"metric-label"},"社会支持",-1)),e("div",Io,[(g(),p(j,null,N(5,v=>e("span",{key:v,class:A(["star",v<=M(o.value.recoveryLevel).social_support?"filled":""])}," ★ ",2)),64))])])])]),e("div",Do,[c[11]||(c[11]=e("h5",{class:"section-title"},"🚀 提升建议",-1)),e("ul",Qo,[(g(!0),p(j,null,N(_(o.value.recoveryLevel),v=>(g(),p("li",{key:v},u(v),1))),128))])])])])]),E(t).detailedReport?(g(),p("div",Mo,[e("div",jo,[c[16]||(c[16]=U('<div class="report-header-decoration" data-v-ca1d75f4><div class="header-pattern" data-v-ca1d75f4></div><div class="header-content" data-v-ca1d75f4><div class="header-icon" data-v-ca1d75f4><div class="icon-ring" data-v-ca1d75f4></div><span class="icon-emoji" data-v-ca1d75f4>🧠</span></div><div class="header-text" data-v-ca1d75f4><h3 class="report-title" data-v-ca1d75f4>深度个性化分析报告</h3><p class="report-subtitle" data-v-ca1d75f4>基于您的测试结果，为您生成的专业心理评估和改善建议</p><div class="header-badges" data-v-ca1d75f4><span class="badge professional" data-v-ca1d75f4>专业评估</span><span class="badge personalized" data-v-ca1d75f4>个性化定制</span><span class="badge comprehensive" data-v-ca1d75f4>全面分析</span></div></div></div></div>',1)),e("div",Po,[e("div",Eo,[c[13]||(c[13]=U('<div class="left-decoration" data-v-ca1d75f4><div class="decoration-dot dot-1" data-v-ca1d75f4></div><div class="decoration-dot dot-2" data-v-ca1d75f4></div><div class="decoration-dot dot-3" data-v-ca1d75f4></div><div class="decoration-line" data-v-ca1d75f4></div></div>',1)),e("div",No,[e("div",Fo,[e("div",{ref:"reportContentRef",innerHTML:de(E(t).detailedReport),class:"report-text-enhanced"},null,8,Ro)])]),c[14]||(c[14]=e("div",{class:"right-decoration"},[e("div",{class:"decoration-shape shape-1"}),e("div",{class:"decoration-shape shape-2"}),e("div",{class:"decoration-shape shape-3"})],-1))]),c[15]||(c[15]=U('<div class="report-footer-decoration" data-v-ca1d75f4><div class="footer-pattern" data-v-ca1d75f4></div><div class="footer-content" data-v-ca1d75f4><div class="footer-divider" data-v-ca1d75f4></div><p class="footer-text" data-v-ca1d75f4><span class="footer-icon" data-v-ca1d75f4>💡</span> 本报告基于情绪疲惫度评估体系生成，建议结合专业心理咨询师指导进行解读 </p></div></div>',1))])])])):F("",!0)])):(g(),p("div",Oo,[e("div",{class:"result-card"},[e("div",{class:"text-gray-500"},[c[17]||(c[17]=e("svg",{class:"w-16 h-16 mx-auto mb-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2 -2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.707-.293H17"})],-1)),c[18]||(c[18]=e("h3",{class:"text-xl font-semibold mb-2"},"未找到测试结果",-1)),c[19]||(c[19]=e("p",{class:"mb-6"},"请先完成测试再来查看结果",-1)),e("button",{onClick:ce,class:"btn btn-primary"}," 开始测试 ")])])]))]))}}),zo=Y(Lo,[["__scopeId","data-v-ca1d75f4"]]),Ho={class:"min-h-screen flex items-center justify-center px-4"},Vo=W({__name:"NotFound",setup(i){const a=le(),t=()=>{a.push("/")};return(o,s)=>(g(),p("div",Ho,[e("div",{class:"max-w-md w-full text-center"},[e("div",{class:"card p-8"},[s[0]||(s[0]=e("h1",{class:"text-6xl font-bold text-gray-400 mb-4"},"404",-1)),s[1]||(s[1]=e("h2",{class:"text-2xl font-semibold text-gray-900 mb-4"},"页面未找到",-1)),s[2]||(s[2]=e("p",{class:"text-gray-600 mb-8"}," 抱歉，您访问的页面不存在。 ",-1)),e("button",{onClick:t,class:"btn btn-primary"}," 返回首页 ")])])]))}}),Wo=[{path:"/",name:"Introduction",component:Ue,meta:{title:"情绪疲惫度测试"}},{path:"/questionnaire",name:"Questionnaire",component:hs,meta:{title:"答题 - 情绪疲惫度测试"}},{path:"/results",name:"Results",component:zo,meta:{title:"测试结果 - 情绪疲惫度测试"}},{path:"/404",name:"NotFound",component:Vo,meta:{title:"页面未找到"}},{path:"/:pathMatch(.*)*",redirect:"/404"}],Ce=Te({history:qe(),routes:Wo});Ce.beforeEach(i=>{var a;(a=i.meta)!=null&&a.title&&(document.title=i.meta.title)});const Go={id:"app",class:"min-h-screen"},Ko=W({__name:"App",setup(i){const a=ie();return he(()=>{a.restoreAnswers()}),(t,o)=>{const s=Ie("router-view");return g(),p("div",Go,[re(s,null,{default:me(({Component:l})=>[re(fe,{name:"fade",mode:"out-in"},{default:me(()=>[(g(),xe(De(l)))]),_:2},1024)]),_:1})])}}}),be=Qe(Ko),Jo=Me();be.use(Jo);be.use(Ce);be.mount("#app");
//# sourceMappingURL=index-BesLtLNP.js.map
