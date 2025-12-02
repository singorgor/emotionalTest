// 用户答案数据类型
export interface UserAnswers {
  [questionId: string]: number; // 1-5评分
}

// 疲惫类型定义
export interface FatigueType {
  code: string;
  name: string;
  matchScore: number;      // 0-100匹配度
  avgScore: number;        // 1-5平均分
}

// 场景分数
export interface SceneScores {
  work: number;           // 工作/学习分数
  relationship: number;   // 人际/家庭分数
  selfDemand: number;    // 自我要求分数
}

// 场景强度等级
export type SceneIntensity = 'low' | 'medium' | 'high';

// 恢复力等级
export type RecoveryLevel = 'low' | 'medium' | 'high';

// 疲惫等级（0-4级）
export type FatigueLevel = 0 | 1 | 2 | 3 | 4;

// 完整的疲劳测评结果
export interface FatigueResult {
  // 基础信息
  fatigueLevel: FatigueLevel;
  fatigueLabel: string;

  // 场景分析
  sceneScores: SceneScores;

  // 类型分析
  typeMatches: FatigueType[];
  primaryType: FatigueType;
  secondaryType: FatigueType;

  // 恢复力
  recoveryLevel: RecoveryLevel;
  recoveryLabel: string;

  // 个性化标签
  personalTags: string[];

  // 报告生成用
  reportProfile: ReportProfile;
}

// 报告用户画像（用于报告生成）
export interface ReportProfile {
  // 基础画像
  fatigueLevel: FatigueLevel;
  primaryType: string;
  secondaryType: string;
  recoveryLevel: RecoveryLevel;

  // 场景特征
  dominantScenes: string[];
  sceneIntensities: {
    work: SceneIntensity;
    relationship: SceneIntensity;
    selfDemand: SceneIntensity;
  };

  // 特殊模式
  specialPatterns: string[];

  // 关键标签
  keyTags: string[];
}

// 题目配置类型
export interface Question {
  id: string;
  text: string;
  category: string;
  type?: 'radio' | 'scale'; // 题目类型
  required?: boolean;
}

// 题目模块配置
export interface QuestionModule {
  title: string;
  description: string;
  questions: Question[];
}

// 完整的题目配置
export interface QuestionConfig {
  A: QuestionModule;
  B: {
    title: string;
    description: string;
    subcategories: {
      work: QuestionModule;
      relationship: QuestionModule;
      selfDemand: QuestionModule;
    };
  };
  C: {
    title: string;
    description: string;
    subtypes: {
      emotional_overload: QuestionModule;
      responsibility_trap: QuestionModule;
      comparison_anxiety: QuestionModule;
      high_pressure_mode: QuestionModule;
    };
  };
  D: QuestionModule;
}

// 选项评分说明
export interface ScaleOption {
  value: number;
  label: string;
  description: string;
}

// 报告内容结构
export interface ReportContent {
  overview: string;
  primaryTypeAnalysis: string;
  secondaryTypeSupplement?: string;
  sceneAnalysis: {
    summary: string;
    detailedScenes: string[];
  };
  recoveryAssessment: string;
  actionPlan: {
    immediate: string[];
    mediumTerm: string[];
    professionalHelp?: string;
  };
  quotes: string[];
}

// PDF模板接口
export interface PDFTemplate {
  renderCover: (doc: any) => void;
  renderOverview: (doc: any) => void;
  renderDetailedAnalysis: (doc: any) => void;
  renderActionPlan: (doc: any) => void;
}

// 应用状态接口
export interface AppState {
  currentStep: 'introduction' | 'questionnaire' | 'results';
  answers: UserAnswers;
  result: FatigueResult | null;
  isCalculating: boolean;
  currentQuestionIndex: number;
}