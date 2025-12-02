import type {
  UserAnswers,
  FatigueResult,
  FatigueType,
  SceneScores,
  RecoveryLevel,
  FatigueLevel,
  ReportProfile,
  SceneIntensity
} from '@/types';
import {
  FATIGUE_TYPE_NAMES,
  FATIGUE_LEVEL_LABELS,
  RESILIENCE_LEVEL_LABELS
} from '@/data/questions';

/**
 * 疲惫度计算引擎
 * 根据用户答案计算疲惫等级、类型、场景分析和心理韧性评估
 */
export class FatigueCalculator {

  /**
   * 计算完整的疲惫评估结果
   */
  calculateFatigueResult(answers: UserAnswers): FatigueResult {
    // 计算各个维度
    const fatigueLevel = this.calculateFatigueLevel(answers);
    const sceneScores = this.calculateSceneScores(answers);
    const typeMatches = this.calculateTypeMatches(answers);
    const recoveryLevel = this.calculateResilienceLevel(answers);

    // 选择主类型和副类型
    const primaryType = typeMatches[0];
    const secondaryType = typeMatches[1] || typeMatches[0];

    // 生成个性化标签
    const personalTags = this.generatePersonalTags(
      sceneScores,
      primaryType,
      recoveryLevel
    );

    // 创建报告画像
    const reportProfile = this.createReportProfile(
      fatigueLevel,
      primaryType,
      secondaryType,
      sceneScores,
      recoveryLevel,
      personalTags
    );

    return {
      fatigueLevel,
      fatigueLabel: FATIGUE_LEVEL_LABELS[fatigueLevel],
      sceneScores,
      typeMatches,
      primaryType,
      secondaryType,
      recoveryLevel,
      recoveryLabel: RESILIENCE_LEVEL_LABELS[recoveryLevel],
      personalTags,
      reportProfile
    };
  }

  /**
   * 计算整体疲惫等级（模块A）
   */
  private calculateFatigueLevel(answers: UserAnswers): FatigueLevel {
    const fatigueQuestions = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'];
    const scores = fatigueQuestions.map(id => answers[id] || 3); // 默认值为3
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    if (average < 2.0) return 0;      // 安全区
    if (average < 3.0) return 1;      // 轻度疲惫
    if (average < 3.5) return 2;      // 中度疲惫
    if (average < 4.0) return 3;      // 高度疲惫
    return 4;                         // 极度疲惫
  }

  /**
   * 计算场景掉血情况（模块B）
   */
  private calculateSceneScores(answers: UserAnswers): SceneScores {
    const workQuestions = ['B1', 'B2', 'B3', 'B4'];
    const relationshipQuestions = ['B5', 'B6', 'B7', 'B8'];
    const selfDemandQuestions = ['B9', 'B10', 'B11', 'B12'];

    const workScore = this.calculateAverageScore(answers, workQuestions);
    const relationshipScore = this.calculateAverageScore(answers, relationshipQuestions);
    const selfDemandScore = this.calculateAverageScore(answers, selfDemandQuestions);

    return {
      work: workScore,
      relationship: relationshipScore,
      selfDemand: selfDemandScore
    };
  }

  /**
   * 计算疲惫来源类型匹配度（模块C）
   */
  private calculateTypeMatches(answers: UserAnswers): FatigueType[] {
    const typeMapping = {
      type_emotional_overload: ['C1', 'C2', 'C3', 'C4'],
      type_responsibility_trap: ['C5', 'C6', 'C7', 'C8'],
      type_comparison_anxiety: ['C9', 'C10', 'C11', 'C12'],
      type_high_pressure_mode: ['C13', 'C14', 'C15', 'C16']
    };

    const typeMatches: FatigueType[] = Object.entries(typeMapping).map(([code, questions]) => {
      const avgScore = this.calculateAverageScore(answers, questions);
      const matchScore = Math.round((avgScore - 1) / 4 * 100); // 1-5映射到0-100

      return {
        code,
        name: FATIGUE_TYPE_NAMES[code as keyof typeof FATIGUE_TYPE_NAMES],
        matchScore,
        avgScore
      };
    });

    // 按匹配度从高到低排序
    return typeMatches.sort((a, b) => b.matchScore - a.matchScore);
  }

  /**
   * 计算心理韧性等级（模块D）
   */
  private calculateResilienceLevel(answers: UserAnswers): RecoveryLevel {
    const resilienceQuestions = ['D1', 'D2', 'D3', 'D4'];
    const average = this.calculateAverageScore(answers, resilienceQuestions);

    if (average < 2.5) return 'low';
    if (average < 3.8) return 'medium';
    return 'high';
  }

  /**
   * 生成个性化标签
   */
  private generatePersonalTags(
    sceneScores: SceneScores,
    primaryType: FatigueType,
    recoveryLevel: RecoveryLevel
  ): string[] {
    const tags: string[] = [];

    // 基于场景分数的标签
    if (sceneScores.work >= 3.2) {
      tags.push("工作/学习耗竭明显");
    }
    if (sceneScores.relationship >= 3.2) {
      tags.push("人际/家庭消耗明显");
    }
    if (sceneScores.selfDemand >= 3.2) {
      tags.push("自我要求偏高、容易苛责");
    }

    // 基于类型的标签
    if (primaryType.code === 'type_emotional_overload') {
      tags.push("高敏感、高共情");
    } else if (primaryType.code === 'type_responsibility_trap') {
      tags.push("习惯扛责、难以说不");
    } else if (primaryType.code === 'type_comparison_anxiety') {
      tags.push("容易对比焦虑");
    } else if (primaryType.code === 'type_high_pressure_mode') {
      tags.push("习惯高压运转");
    }

    // 基于心理韧性的标签
    if (recoveryLevel === 'low') {
      tags.push("心理韧性不足、抗压能力较弱");
    } else if (recoveryLevel === 'medium') {
      tags.push("心理韧性中等、需要加强调节");
    } else {
      tags.push("心理韧性良好、具备自我修复能力");
    }

    return tags;
  }

  /**
   * 创建报告用户画像
   */
  private createReportProfile(
    fatigueLevel: FatigueLevel,
    primaryType: FatigueType,
    secondaryType: FatigueType,
    sceneScores: SceneScores,
    recoveryLevel: RecoveryLevel,
    personalTags: string[]
  ): ReportProfile {
    // 确定主要掉血场景
    const sceneEntries = Object.entries(sceneScores) as [keyof SceneScores, number][];
    sceneEntries.sort((a, b) => b[1] - a[1]); // 按分数从高到低排序
    const dominantScenes = sceneEntries
      .filter(([_, score]) => score >= 2.5) // 只选择分数较高的场景
      .slice(0, 2) // 最多选择2个主要场景
      .map(([scene]) => scene);

    // 计算场景强度等级
    const sceneIntensities = {
      work: this.getSceneIntensity(sceneScores.work),
      relationship: this.getSceneIntensity(sceneScores.relationship),
      selfDemand: this.getSceneIntensity(sceneScores.selfDemand)
    };

    // 识别特殊组合模式
    const specialPatterns = this.identifySpecialPatterns(
      primaryType,
      sceneScores,
      recoveryLevel
    );

    // 选择关键标签（用于金句选择）
    const keyTags = this.selectKeyTags(personalTags, primaryType.code);

    return {
      fatigueLevel,
      primaryType: primaryType.code,
      secondaryType: secondaryType.code,
      recoveryLevel,
      dominantScenes,
      sceneIntensities,
      specialPatterns,
      keyTags
    };
  }

  /**
   * 获取场景强度等级
   */
  private getSceneIntensity(score: number): SceneIntensity {
    if (score >= 3.5) return 'high';
    if (score >= 2.5) return 'medium';
    return 'low';
  }

  /**
   * 识别特殊组合模式
   */
  private identifySpecialPatterns(
    primaryType: FatigueType,
    sceneScores: SceneScores,
    recoveryLevel: RecoveryLevel
  ): string[] {
    const patterns: string[] = [];

    // 责任绑架型 + 高工作压力
    if (primaryType.code === 'type_responsibility_trap' && sceneScores.work >= 3.5) {
      patterns.push('work扛责者');
    }

    // 情绪过载型 + 高人际压力
    if (primaryType.code === 'type_emotional_overload' && sceneScores.relationship >= 3.5) {
      patterns.push('情绪缓冲垫');
    }

    // 对比焦虑型 + 高自我要求
    if (primaryType.code === 'type_comparison_anxiety' && sceneScores.selfDemand >= 3.5) {
      patterns.push('自我驱动焦虑');
    }

    // 高压稳定型 + 低恢复力
    if (primaryType.code === 'type_high_pressure_mode' && recoveryLevel === 'low') {
      patterns.push('透支稳定');
    }

    return patterns;
  }

  /**
   * 选择关键标签
   */
  private selectKeyTags(personalTags: string[], primaryTypeCode: string): string[] {
    // 先基于类型选择基础标签
    const typeTagMap = {
      type_emotional_overload: ['sensitivity', 'emotional_boundary'],
      type_responsibility_trap: ['responsibility', 'boundary_setting'],
      type_comparison_anxiety: ['comparison', 'self_acceptance'],
      type_high_pressure_mode: ['pressure', 'rest_permission']
    };

    const keyTags: string[] = typeTagMap[primaryTypeCode as keyof typeof typeTagMap] || [];

    // 再从个性化标签中选择一些关键词
    personalTags.forEach(tag => {
      if (tag.includes('工作')) keyTags.push('work_stress');
      if (tag.includes('人际') || tag.includes('家庭')) keyTags.push('relationship_burnout');
      if (tag.includes('自我要求')) keyTags.push('self_criticism');
      if (tag.includes('恢复力')) keyTags.push('recovery');
    });

    // 去重并限制数量
    return [...new Set(keyTags)].slice(0, 4);
  }

  /**
   * 计算平均分（工具方法）
   */
  private calculateAverageScore(answers: UserAnswers, questionIds: string[]): number {
    if (questionIds.length === 0) return 0;
    const scores = questionIds.map(id => answers[id] || 3); // 默认值为3
    const validScores = scores.filter(score => !isNaN(score) && score !== null && score !== undefined);
    if (validScores.length === 0) return 0;
    return validScores.reduce((sum, score) => sum + score, 0) / validScores.length;
  }
}

// 创建计算器实例
export const fatigueCalculator = new FatigueCalculator();

/**
 * 便捷函数：计算疲惫评估结果
 */
export function calculateFatigueResult(answers: UserAnswers): FatigueResult {
  return fatigueCalculator.calculateFatigueResult(answers);
}