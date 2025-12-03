<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- 顶部标题 -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">FBI 情绪疲惫度测试结果</h1>
            <p class="text-gray-600 mt-1">
              测试时间: {{ formatDuration(fatigueTestStore.duration) }} ·
              {{ new Date().toLocaleDateString() }}
            </p>
          </div>
          <button
            @click="restartTest"
            class="btn btn-secondary"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div v-if="result" class="max-w-6xl mx-auto px-4 py-8">
      <!-- 核心诊断概览 -->
      <div class="result-card featured mb-8 animate-fade-in">
        <div class="text-center">
          <div class="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold mb-4"
               :class="`fatigue-${result.fatigueLevel}`">
            {{ result.fatigueLabel }}
          </div>

          <!-- 关键指标概览 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl font-bold text-primary-600 mb-1">{{ result.primaryType.matchScore }}%</div>
              <div class="text-sm text-gray-600">疲惫类型匹配度</div>
              <div class="font-medium text-gray-900 mt-1">{{ result.primaryType.name }}</div>
            </div>

            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl font-bold text-orange-600 mb-1">{{ result.sceneScores.work.toFixed(1) }}</div>
              <div class="text-sm text-gray-600">工作压力指数</div>
              <div class="font-medium text-gray-900 mt-1">{{ getPressureLevel(result.sceneScores.work) }}</div>
            </div>

            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl font-bold" :class="getRecoveryLevelClass(result.recoveryLevel).split(' ')[2]">
                {{ getRecoveryScoreText(result.recoveryLevel) }}
              </div>
              <div class="text-sm text-gray-600">心理韧性水平</div>
              <div class="font-medium text-gray-900 mt-1">{{ result.recoveryLabel }}</div>
            </div>
          </div>

          <!-- 个人特征标签 -->
          <div class="result-card animate-fade-in" style="animation-delay: 0.5s">
            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
              个人特征标签
            </h3>
            <div class="flex flex-wrap gap-2 justify-center">
              <span
                v-for="tag in result.personalTags"
                :key="tag"
                class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 三大核心分析 - 水平等宽布局 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- 疲惫类型分析 -->
        <div class="analysis-card animate-fade-in" style="animation-delay: 0.1s">
          <div class="card-header">
            <span class="header-dot bg-blue-500"></span>
            <h3 class="card-title">疲惫类型分析</h3>
          </div>
          <div class="card-content">
            <!-- 主要疲惫类型 -->
            <div class="type-item primary">
              <div class="type-header">
                <h4 class="type-name">{{ result.primaryType.name }}</h4>
                <span class="type-badge primary">主要 {{ result.primaryType.matchScore }}%</span>
              </div>
              <p class="type-description">{{ getTypeDescription(result.primaryType.code) }}</p>
            </div>

            <!-- 次要疲惫类型 -->
            <div v-if="result.secondaryType && result.secondaryType.code !== result.primaryType.code"
                 class="type-item secondary">
              <div class="type-header">
                <h4 class="type-name">{{ result.secondaryType.name }}</h4>
                <span class="type-badge secondary">次要 {{ result.secondaryType.matchScore }}%</span>
              </div>
              <p class="type-description">{{ getTypeDescription(result.secondaryType.code) }}</p>
            </div>
          </div>
        </div>

        <!-- 场景压力分析 -->
        <div class="analysis-card animate-fade-in" style="animation-delay: 0.2s">
          <div class="card-header">
            <span class="header-dot bg-orange-500"></span>
            <h3 class="card-title">场景压力分析</h3>
          </div>
          <div class="card-content">
            <div v-for="(score, scene) in result.sceneScores" :key="scene" class="scene-item">
              <div class="scene-header">
                <span class="scene-name">{{ getSceneName(scene) }}</span>
                <div class="scene-score">
                  <span class="score-text" :class="getScoreColor(score)">{{ score.toFixed(1) }}</span>
                  <span class="pressure-badge" :class="getPressureLevelClass(score)">{{ getPressureLevel(score) }}</span>
                </div>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" :class="getScoreBarColor(score)"
                     :style="{ width: `${(score / 5) * 100}%` }"></div>
              </div>
              <div class="scene-advice">
                {{ getPressureAdvice(score) }}
              </div>
            </div>
          </div>
        </div>

        <!-- 心理韧性评估 -->
        <div class="analysis-card animate-fade-in" style="animation-delay: 0.3s">
          <div class="card-header">
            <span class="header-dot bg-green-500"></span>
            <h3 class="card-title">心理韧性评估</h3>
          </div>
          <div class="card-content">
            <div class="recovery-result">
              <div class="recovery-badge" :class="getRecoveryLevelClass(result.recoveryLevel)">
                {{ result.recoveryLabel }}
              </div>
              <div class="recovery-description">
                {{ getRecoveryDescription(result.recoveryLevel) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 专业建议部分（自动显示） -->
      <div v-if="fatigueTestStore.detailedReport" class="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        <div class="professional-advice">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">📊 深度个性化分析报告</h3>
            <p class="text-gray-600">基于您的测试结果，为您生成的专业心理评估和改善建议</p>
          </div>
          <div class="prose prose-gray max-w-none bg-white p-6 rounded-lg border-l-4 border-blue-200">
            <div v-html="fatigueTestStore.detailedReport"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 没有结果时的提示 -->
    <div v-else class="max-w-2xl mx-auto px-4 py-16 text-center">
      <div class="result-card">
        <div class="text-gray-500">
          <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2 -2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.707-.293H17" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">未找到测试结果</h3>
          <p class="mb-6">请先完成测试再来查看结果</p>
          <button @click="goToTest" class="btn btn-primary">
            开始测试
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFatigueTestStore } from '@/stores/fatigueTest'
import { SCENE_NAMES } from '@/data/questions'
import type { RecoveryLevel } from '@/types'

const router = useRouter()
const fatigueTestStore = useFatigueTestStore()

const result = computed(() => fatigueTestStore.result)

// 格式化测试时间
const formatDuration = (seconds: number | null): string => {
  if (!seconds) return '未知'
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return remainingSeconds > 0 ? `${minutes}分${remainingSeconds}秒` : `${minutes}分钟`
}

// 获取场景名称
const getSceneName = (scene: string): string => {
  const sceneMap = SCENE_NAMES as Record<string, string>
  return sceneMap[scene] || scene
}

// 获取分数对应的颜色
const getScoreColor = (score: number): string => {
  if (score >= 4.0) return 'text-red-600 font-bold'
  if (score >= 3.5) return 'text-orange-600 font-semibold'
  if (score >= 2.5) return 'text-yellow-600 font-medium'
  return 'text-green-600'
}

// 获取分数条颜色
const getScoreBarColor = (score: number): string => {
  if (score >= 4.0) return 'bg-red-500'
  if (score >= 3.5) return 'bg-orange-500'
  if (score >= 2.5) return 'bg-yellow-500'
  return 'bg-green-500'
}

// 压力相关的展示方法
const getPressureLevel = (score: number): string => {
  if (score >= 4.0) return '高压'
  if (score >= 3.2) return '偏高'
  if (score >= 2.4) return '中等'
  return '较低'
}

const getPressureLevelClass = (score: number): string => {
  if (score >= 4.0) return 'bg-red-100 text-red-800 border border-red-200'
  if (score >= 3.2) return 'bg-orange-100 text-orange-800 border border-orange-200'
  if (score >= 2.4) return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
  return 'bg-green-100 text-green-800 border border-green-200'
}

const getPressureDescription = (score: number): string => {
  if (score >= 4.0) return '当前处于高压状态，需要主动放缓节奏并寻找支撑'
  if (score >= 3.2) return '压力偏高，注意安排缓冲、沟通和情绪调节'
  if (score >= 2.4) return '压力处在可控范围，适度关注节奏和休息'
  return '压力较低，保持当下的节奏与自我照顾'
}

const getPressureAdvice = (score: number): string => {
  if (score >= 4.0) return '立即安排短暂停顿，拆解任务，保证睡眠；必要时寻求同事或专业支持'
  if (score >= 3.2) return '为关键任务预留缓冲，明确优先级，多与同伴沟通协作'
  if (score >= 2.4) return '持续保持番茄钟或分段工作节奏，确保基础休息'
  return '维持良好习惯，准备轻量运动或放松作为日常保养'
}

// 获取心理韧性等级样式
const getRecoveryLevelClass = (level: RecoveryLevel): string => {
  switch (level) {
    case 'low':
      return 'bg-red-100 text-red-800 border border-red-200'
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
    case 'high':
      return 'bg-green-100 text-green-800 border border-green-200'
    default:
      return 'bg-gray-100 text-gray-800 border border-gray-200'
  }
}

// 获取心理韧性分数文本
const getRecoveryScoreText = (level: RecoveryLevel): string => {
  switch (level) {
    case 'low':
      return '2.5/10'
    case 'medium':
      return '6.5/10'
    case 'high':
      return '8.5/10'
    default:
      return '5.0/10'
  }
}

// 获取类型描述
const getTypeDescription = (typeCode: string): string => {
  const descriptions: Record<string, string> = {
    'type_emotional_overload': '高敏感高共情类型，容易吸收他人情绪而承担心理负担',
    'type_responsibility_trap': '责任绑架型，习惯承担过多责任和义务',
    'type_comparison_anxiety': '对比焦虑型，容易与他人比较而产生自我压力',
    'type_high_pressure_mode': '高压运转型，习惯高强度快节奏的工作生活模式'
  }
  return descriptions[typeCode] || '综合压力型'
}

// 获取心理韧性描述
const getRecoveryDescription = (level: RecoveryLevel): string => {
  switch (level) {
    case 'low':
      return '您的心理韧性较低，在面对压力时容易感到疲惫，建议积极学习压力管理技巧，必要时寻求专业支持来提升应对能力。'
    case 'medium':
      return '您的心理韧性处于中等水平，有一定的抗压能力，但在持续压力下仍可能出现疲惫。建议加强自我调节训练，建立更好的压力应对机制。'
    case 'high':
      return '您的心理韧性较强，能够在面对压力时保持相对稳定的情绪状态，并具备良好的自我调节能力。建议继续保持现有的压力管理习惯。'
    default:
      return '您的心理韧性水平正常，建议关注自身压力状态，适时进行调整和恢复。'
  }
}

// 重新测试
const restartTest = () => {
  fatigueTestStore.restart()
  router.push('/')
}

// 跳转到测试页面
const goToTest = () => {
  router.push('/')
}
</script>

<style scoped>
/* 基础动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

/* 原有的按钮样式 */
.btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2c5aa0 0%, #1a3a6e 100%);
  transform: translateY(-1px);
}

.btn-secondary {
  background: white;
  color: #4b5563;
  border: 2px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #3b82f6;
  transform: translateY(-1px);
}

/* 疲惫等级样式 */
.fatigue-low {
  @apply bg-green-100 text-green-800 border border-green-200;
}

.fatigue-medium {
  @apply bg-yellow-100 text-yellow-800 border border-yellow-200;
}

.fatigue-high {
  @apply bg-orange-100 text-orange-800 border border-orange-200;
}

.fatigue-severe {
  @apply bg-red-100 text-red-800 border border-red-200;
}

/* 分析卡片样式 */
.analysis-card {
  @apply bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.card-header {
  @apply px-6 py-4 border-b border-gray-100 flex items-center gap-3;
}

.header-dot {
  @apply w-2 h-2 rounded-full;
}

.card-title {
  @apply text-lg font-semibold text-gray-900;
}

.card-content {
  @apply p-6 flex-1 space-y-4;
}

/* 疲惫类型分析样式 */
.type-item {
  @apply p-4 rounded-lg border-l-4;
}

.type-item.primary {
  @apply bg-blue-50 border-blue-200;
}

.type-item.secondary {
  @apply bg-gray-50 border-gray-200;
}

.type-header {
  @apply flex items-center justify-between mb-2;
}

.type-name {
  @apply font-semibold text-gray-900;
}

.type-badge {
  @apply px-2 py-1 text-xs font-medium rounded-full;
}

.type-badge.primary {
  @apply bg-blue-100 text-blue-800;
}

.type-badge.secondary {
  @apply bg-gray-100 text-gray-800;
}

.type-description {
  @apply text-sm text-gray-700 leading-relaxed;
}

/* 场景压力分析样式 */
.scene-item {
  @apply space-y-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0;
}

.scene-header {
  @apply flex items-center justify-between;
}

.scene-name {
  @apply font-medium text-gray-800 text-sm;
}

.scene-score {
  @apply flex items-center gap-2;
}

.score-text {
  @apply text-sm font-medium;
}

.pressure-badge {
  @apply px-2 py-1 text-xs font-medium rounded-full;
}

.progress-bar {
  @apply w-full bg-gray-200 rounded-full h-2;
}

.progress-fill {
  @apply h-full rounded-full transition-all duration-300 ease-out;
}

.scene-advice {
  @apply text-xs text-gray-600 leading-relaxed;
}

/* 心理韧性评估样式 */
.recovery-result {
  @apply text-center space-y-4;
}

.recovery-badge {
  @apply inline-flex items-center px-4 py-2 rounded-full text-base font-medium;
}

.recovery-description {
  @apply text-sm text-gray-700 leading-relaxed text-left;
}

/* 专业建议部分样式 */
.professional-advice {
  @apply bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden;
}

/* 响应式优化 */
@media (max-width: 1024px) {
  .analysis-card {
    min-height: 240px;
  }
}

@media (max-width: 768px) {
  .card-header {
    @apply px-4 py-3;
  }

  .card-content {
    @apply p-4 space-y-3;
  }

  .analysis-card {
    min-height: 200px;
  }
}
</style>
