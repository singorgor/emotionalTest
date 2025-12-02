import type { QuestionConfig } from '@/types';

export const QUESTION_CONFIG: QuestionConfig = {
  A: {
    title: "整体疲惫强度评估",
    description: "用来判断你到底有多累，不区分场景、不谈来源。",
    questions: [
      {
        id: "A1",
        text: "最近一段时间，我早上醒来时，经常觉得自己根本没有真正休息好。",
        category: "fatigue_intensity"
      },
      {
        id: "A2",
        text: "明明睡眠时间差不多，但整个人总是提不起精神、像手机电量一直不满格。",
        category: "fatigue_intensity"
      },
      {
        id: "A3",
        text: "一天下来，我会觉得脑子被掏空，哪怕什么都不做也很难真正放松。",
        category: "fatigue_intensity"
      },
      {
        id: "A4",
        text: "最近，我很容易对小事失去耐心，情绪一下子就被点燃或拉低。",
        category: "fatigue_intensity"
      },
      {
        id: "A5",
        text: "我经常需要强迫自己去完成本来应该轻松完成的事情。",
        category: "fatigue_intensity"
      },
      {
        id: "A6",
        text: "我常常会有一种说不出原因的心累，明明没有发生什么大事，却总觉得压得喘不过气。",
        category: "fatigue_intensity"
      },
      {
        id: "A7",
        text: "最近，我的注意力很难集中，看东西、开会或聊天都会不自觉走神。",
        category: "fatigue_intensity"
      },
      {
        id: "A8",
        text: "即使有空闲时间，我也很难真正投入一件事，总有一种怎么都休息不够的感觉。",
        category: "fatigue_intensity"
      }
    ]
  },

  B: {
    title: "疲惫场景 / 掉血地图",
    description: "回答你主要是在哪些场景被榨干",
    subcategories: {
      work: {
        title: "工作 / 学习压力",
        description: "评估你在工作和学习场景中的消耗程度",
        questions: [
          {
            id: "B1",
            text: "面对工作 / 学习任务时，我经常有一种怎么追也追不完的焦虑感。",
            category: "work"
          },
          {
            id: "B2",
            text: "我常常担心自己在工作 / 学习上的表现不够好，会被否定或被淘汰。",
            category: "work"
          },
          {
            id: "B3",
            text: "即使已经很累了，我还是会不自觉地多接一些工作 / 任务，生怕被说不上进。",
            category: "work"
          },
          {
            id: "B4",
            text: "最近，我在工作 / 学习中很难找到成就感，更多是为了撑过去、别出事而硬撑。",
            category: "work"
          }
        ]
      },

      relationship: {
        title: "人际 / 家庭关系消耗",
        description: "评估你在人际关系和家庭生活中的消耗程度",
        questions: [
          {
            id: "B5",
            text: "我会为了不让别人失望或生气，答应很多自己其实不太想做的事。",
            category: "relationship"
          },
          {
            id: "B6",
            text: "和家人、伴侣、朋友相处时，我经常在意他们的情绪，生怕自己说错话或做错事。",
            category: "relationship"
          },
          {
            id: "B7",
            text: "有时我会觉得自己像情绪垃圾桶，别人把负面情绪倾倒给我后，我还得自己消化。",
            category: "relationship"
          },
          {
            id: "B8",
            text: "和身边的人相处后，比起轻松，我更容易感觉到被消耗、被掏空。",
            category: "relationship"
          }
        ]
      },

      selfDemand: {
        title: "自我要求 / 内心压力",
        description: "评估你对自己的要求程度和内心压力",
        questions: [
          {
            id: "B9",
            text: "我对自己有很多应该做到的标准，一旦没做到就会强烈自责。",
            category: "selfDemand"
          },
          {
            id: "B10",
            text: "当我稍微休息一下或偷个懒时，心里会冒出这样很没用、很浪费时间的声音。",
            category: "selfDemand"
          },
          {
            id: "B11",
            text: "我很难接受自己状态不好或者表现一般，总觉得自己应该能再好一点。",
            category: "selfDemand"
          },
          {
            id: "B12",
            text: "即使周围人已经觉得我做得够多了，我自己仍然觉得不够、不够、不够。",
            category: "selfDemand"
          }
        ]
      }
    }
  },

  C: {
    title: "疲惫来源类型",
    description: "回答我为什么会这么累——主类型 + 副标签就从这里算出来。",
    subtypes: {
      emotional_overload: {
        title: "情绪过载型",
        description: "高敏感、高共情，容易情绪过载",
        questions: [
          {
            id: "C1",
            text: "周围人的情绪变化（比如语气微妙变化、表情不对）很容易被我捕捉到，也会影响我一整天的心情。",
            category: "emotional_overload"
          },
          {
            id: "C2",
            text: "别人遇到困难或心情不好时，我会下意识把他们的感受揽到自己身上，替对方着急、替对方难受。",
            category: "emotional_overload"
          },
          {
            id: "C3",
            text: "即使事情已经过去了，我还是会反复回想当时的对话和细节，揣测自己有没有哪里做得不好。",
            category: "emotional_overload"
          },
          {
            id: "C4",
            text: "面对冲突或不开心的场面时，我比一般人更容易紧张、心慌，很想赶紧把气氛修好。",
            category: "emotional_overload"
          }
        ]
      },

      responsibility_trap: {
        title: "责任绑架型",
        description: "习惯扛责，难以说不",
        questions: [
          {
            id: "C5",
            text: "很多时候我会觉得：这件事如果我不管，就会出问题，于是明明很累也会硬着头皮上。",
            category: "responsibility_trap"
          },
          {
            id: "C6",
            text: "当我拒绝别人、说不方便或不行时，会感到强烈的愧疚，好像自己是个自私的人。",
            category: "responsibility_trap"
          },
          {
            id: "C7",
            text: "我经常接手别人本可以自己处理的事情，只因为不想麻烦对方或不想看他们手忙脚乱。",
            category: "responsibility_trap"
          },
          {
            id: "C8",
            text: "我习惯在团队 / 家庭里扮演兜底的角色，出事先看我、收尾也找我。",
            category: "responsibility_trap"
          }
        ]
      },

      comparison_anxiety: {
        title: "对比焦虑型",
        description: "易受比较刺激，容易对比焦虑",
        questions: [
          {
            id: "C9",
            text: "刷社交媒体或听到同龄人的近况时，我很容易不自觉地和他们比较，感觉自己落后了。",
            category: "comparison_anxiety"
          },
          {
            id: "C10",
            text: "当别人分享自己的成绩、收入或生活时，我表面上很平静，内心却会暗暗给自己很大压力。",
            category: "comparison_anxiety"
          },
          {
            id: "C11",
            text: "我常常会给自己设定一些这个年龄应该达到什么水平的目标，一旦没达到就很焦虑。",
            category: "comparison_anxiety"
          },
          {
            id: "C12",
            text: "听到别人说谁谁做得很好、谁谁很厉害时，我会立刻联想到自己是不是不够好。",
            category: "comparison_anxiety"
          }
        ]
      },

      high_pressure_mode: {
        title: "高压稳定型",
        description: "习惯高压运转，不敢轻易停下",
        questions: [
          {
            id: "C13",
            text: "我已经习惯在高强度、高节奏下工作 / 生活，一旦突然闲下来反而会不安。",
            category: "high_pressure_mode"
          },
          {
            id: "C14",
            text: "遇到任务或问题时，我的第一反应通常是咬牙撑过去，而不是我能不能先调整一下自己。",
            category: "high_pressure_mode"
          },
          {
            id: "C15",
            text: "即使身体已经出现一些疲惫信号（比如失眠、头痛、心悸等），我也会安慰自己再撑一阵就好了。",
            category: "high_pressure_mode"
          },
          {
            id: "C16",
            text: "我很难向别人坦白自己累了、扛不住了，总觉得那样会显得自己不够坚强或不够专业。",
            category: "high_pressure_mode"
          }
        ]
      }
    }
  },

  D: {
    title: "心理韧性 / 抗压能力",
    description: "评估我面对压力时的心理调节能力和自我修复资源",
    questions: [
      {
        id: "D1",
        text: "最近一段时间，我整体的睡眠质量还算可以，能在大部分夜晚获得相对完整的休息。",
        category: "recovery"
      },
      {
            id: "D2",
            text: "我的生活里有一两个可以真正说心里话的人，和他们聊完会感觉轻松一些。",
            category: "recovery"
          },
          {
            id: "D3",
            text: "我偶尔会给自己留出只属于自己、不需要对任何人负责的时间，用来放空或做喜欢的事情。",
            category: "recovery"
          },
          {
            id: "D4",
            text: "当我意识到自己真的撑不住时，我有能力也敢于说我需要暂停一下 / 需要帮助。",
            category: "recovery"
          }
        ]
      }
};

// 评分选项配置
export const SCALE_OPTIONS = [
  { value: 1, label: "完全不符合", description: "这种描述完全不符合我的情况" },
  { value: 2, label: "偶尔这样", description: "这种描述只是偶尔符合我的情况" },
  { value: 3, label: "一半一半", description: "这种描述有时符合我的情况" },
  { value: 4, label: "经常如此", description: "这种描述经常符合我的情况" },
  { value: 5, label: "非常符合", description: "这种描述非常符合我的情况" }
];

// 获取所有题目ID的函数
export function getAllQuestionIds(): string[] {
  const allIds: string[] = [];

  // A模块题目
  QUESTION_CONFIG.A.questions.forEach(q => allIds.push(q.id));

  // B模块题目
  Object.values(QUESTION_CONFIG.B.subcategories).forEach(subcategory => {
    subcategory.questions.forEach(q => allIds.push(q.id));
  });

  // C模块题目
  Object.values(QUESTION_CONFIG.C.subtypes).forEach(subtype => {
    subtype.questions.forEach(q => allIds.push(q.id));
  });

  // D模块题目
  QUESTION_CONFIG.D.questions.forEach(q => allIds.push(q.id));

  return allIds;
}

// 获取题目总数的函数
export function getTotalQuestionCount(): number {
  return getAllQuestionIds().length;
}

// 疲惫类型名称映射
export const FATIGUE_TYPE_NAMES = {
  type_emotional_overload: "情绪过载型",
  type_responsibility_trap: "责任绑架型",
  type_comparison_anxiety: "对比焦虑型",
  type_high_pressure_mode: "高压稳定型"
};

// 疲惫等级标签映射
export const FATIGUE_LEVEL_LABELS = {
  0: "0级 · 安全区",
  1: "1级 · 轻度疲惫",
  2: "2级 · 中度疲惫",
  3: "3级 · 高度疲惫",
  4: "4级 · 极度疲惫"
};

// 心理韧性等级标签映射
export const RESILIENCE_LEVEL_LABELS = {
  low: "心理韧性不足 · 抗压能力较弱",
  medium: "心理韧性中等 · 具备一定调节能力",
  high: "心理韧性良好 · 抗压能力强"
};

// 场景名称映射
export const SCENE_NAMES = {
  work: "工作/学习",
  relationship: "人际/家庭",
  selfDemand: "自我要求/内心压力"
};