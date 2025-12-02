import { defineStore } from 'pinia';
import type { AppState } from '@/types';
import { calculateFatigueResult } from '@/utils/calculator';
import { getAllQuestionIds, getTotalQuestionCount } from '@/data/questions';

export const useFatigueTestStore = defineStore('fatigueTest', {
  state: (): AppState & {
    startTime: number | null;
    endTime: number | null;
    detailedReport: string | null;
  } => ({
    currentStep: 'introduction',
    answers: {} as Record<string, number>,
    result: null,
    isCalculating: false,
    currentQuestionIndex: 0,
    startTime: null,
    endTime: null,
    detailedReport: null
  }),

  getters: {
    /**
     * 获取当前进度
     */
    progress: (state): number => {
      const totalQuestions = getTotalQuestionCount();
      const answeredQuestions = Object.keys(state.answers).length;
      return Math.round((answeredQuestions / totalQuestions) * 100);
    },

    /**
     * 获取已完成题目数
     */
    answeredCount: (state): number => {
      return Object.keys(state.answers).length;
    },

    /**
     * 获取总题目数
     */
    totalQuestions: (): number => {
      return getTotalQuestionCount();
    },

    /**
     * 检查是否可以提交（所有题目都已回答）
     */
    canSubmit: (state): boolean => {
      const allQuestionIds = getAllQuestionIds();
      return allQuestionIds.every(id => state.answers[id] !== undefined);
    },

    /**
     * 获取测试用时（秒）
     */
    duration: (state): number | null => {
      if (!state.startTime) return null;
      const endTime = state.endTime || Date.now();
      return Math.round((endTime - state.startTime) / 1000);
    }
  },

  actions: {
    /**
     * 保存用户答案
     */
    saveAnswer(questionId: string, score: number) {
      this.answers[questionId] = score;

      // 保存到localStorage（可选）
      try {
        localStorage.setItem('fbi_answers', JSON.stringify(this.answers));
      } catch (error) {
        console.warn('无法保存答案到本地存储:', error);
      }
    },

    /**
     * 开始测试
     */
    startTest() {
      this.currentStep = 'questionnaire';
      this.startTime = Date.now();
      this.currentQuestionIndex = 0;

      // 清空之前的答案
      this.answers = {};
      this.result = null;
      this.isCalculating = false;

      // 清除本地存储的答案
      try {
        localStorage.removeItem('fbi_answers');
      } catch (error) {
        console.warn('无法清除本地存储:', error);
      }
    },

    /**
     * 进入结果页面
     */
    goToResults() {
      this.currentStep = 'results';
    },

    /**
     * 返回介绍页面
     */
    restart() {
      this.currentStep = 'introduction';
      this.answers = {};
      this.result = null;
      this.isCalculating = false;
      this.currentQuestionIndex = 0;
      this.startTime = null;
      this.endTime = null;
      this.detailedReport = null;

      // 清除本地存储
      try {
        localStorage.removeItem('fbi_answers');
      } catch (error) {
        console.warn('无法清除本地存储:', error);
      }
    },

    /**
     * 设置详细报告内容
     */
    setDetailedReport(content: string) {
      this.detailedReport = content;
    },

    /**
     * 计算测评结果
     */
    async calculateResults() {
      if (!this.canSubmit) {
        throw new Error('还有题目未完成');
      }

      this.isCalculating = true;

      try {
        // 模拟计算延迟，让用户看到加载状态
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 计算结果
        this.result = calculateFatigueResult(this.answers);
        this.endTime = Date.now();

        // 进入结果页面
        this.goToResults();

      } catch (error) {
        console.error('计算结果失败:', error);
        throw error;
      } finally {
        this.isCalculating = false;
      }
    },

    /**
     * 从本地存储恢复答案
     */
    restoreAnswers() {
      try {
        const saved = localStorage.getItem('fbi_answers');
        if (saved) {
          const savedAnswers = JSON.parse(saved);
          this.answers = savedAnswers;
        }
      } catch (error) {
        console.warn('无法恢复本地存储的答案:', error);
      }
    },

    /**
     * 导出答案数据（用于分析或备份）
     */
    exportAnswers(): string {
      const exportData = {
        answers: this.answers,
        timestamp: new Date().toISOString(),
        duration: this.duration,
        version: '1.0.0'
      };
      return JSON.stringify(exportData, null, 2);
    },

    /**
     * 获取特定模块的完成情况
     */
    getModuleProgress(module: string): {
      completed: number;
      total: number;
      percentage: number;
    } {
      const moduleQuestions: Record<string, string[]> = {
        'A': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
        'B': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12'],
        'C': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16'],
        'D': ['D1', 'D2', 'D3', 'D4']
      };

      const questions = moduleQuestions[module] || [];
      const completed = questions.filter(id => this.answers[id] !== undefined).length;
      const total = questions.length;
      const percentage = Math.round((completed / total) * 100);

      return { completed, total, percentage };
    },

    /**
     * 跳转到指定题目
     */
    goToQuestion(index: number) {
      const totalQuestions = getTotalQuestionCount();
      if (index >= 0 && index < totalQuestions) {
        this.currentQuestionIndex = index;
      }
    },

    /**
     * 下一题
     */
    nextQuestion() {
      const totalQuestions = getTotalQuestionCount();
      if (this.currentQuestionIndex < totalQuestions - 1) {
        this.currentQuestionIndex++;
      }
    },

    /**
     * 上一题
     */
    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },

    /**
     * 验证当前答案的完整性
     */
    validateAnswers(): {
      isValid: boolean;
      missingQuestions: string[];
      warnings: string[];
    } {
      const allQuestionIds = getAllQuestionIds();
      const missingQuestions = allQuestionIds.filter(id => this.answers[id] === undefined);
      const warnings: string[] = [];

      // 检查是否有极端答案（所有题目都选同一个选项）
      const answerValues = Object.values(this.answers);
      if (answerValues.length > 0) {
        const uniqueValues = new Set(answerValues);
        if (uniqueValues.size === 1) {
          warnings.push('所有题目都选择了相同的选项，建议重新审视每个题目');
        }
      }

      // 检查模块完成情况
      const moduleProgress = {
        A: this.getModuleProgress('A'),
        B: this.getModuleProgress('B'),
        C: this.getModuleProgress('C'),
        D: this.getModuleProgress('D')
      };

      Object.entries(moduleProgress).forEach(([module, progress]) => {
        if (progress.completed < progress.total) {
          warnings.push(`${module}模块还有${progress.total - progress.completed}道题目未完成`);
        }
      });

      return {
        isValid: missingQuestions.length === 0,
        missingQuestions,
        warnings
      };
    }
  }
});