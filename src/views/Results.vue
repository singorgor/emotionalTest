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
              <div class="text-sm text-gray-600">主要类型匹配度</div>
              <div class="font-medium text-gray-900 mt-1">{{ result.primaryType.name }}</div>
            </div>

            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl font-bold text-orange-600 mb-1">{{ Math.round((result.sceneScores.work || 0) * 10) / 10 }}</div>
              <div class="text-sm text-gray-600">工作压力指数</div>
              <div class="font-medium text-gray-900 mt-1">工作场景</div>
            </div>

            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl font-bold" :class="getRecoveryLevelClass(result.recoveryLevel).split(' ')[2]">
                {{ getRecoveryScoreText(result.recoveryLevel) }}
              </div>
              <div class="text-sm text-gray-600">心理韧性水平</div>
              <div class="font-medium text-gray-900 mt-1">{{ result.recoveryLabel }}</div>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">
            您的个性化情绪疲惫分析报告
          </h2>
        </div>
      </div>

      <!-- 详细分析区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <!-- 左侧：疲惫来源分析 -->
        <div class="space-y-6">
          <!-- 主要疲惫类型 -->
          <div class="result-card animate-fade-in" style="animation-delay: 0.1s">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">主要疲惫类型</h3>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span class="text-primary-600 font-bold">{{ result.primaryType.matchScore }}%</span>
              </div>
            </div>
            <div class="p-4 bg-primary-50 rounded-lg border-l-4 border-primary-200">
              <h4 class="font-semibold text-primary-900 mb-2">{{ result.primaryType.name }}</h4>
              <p class="text-gray-700 text-sm leading-relaxed">
                {{ getTypeDescription(result.primaryType.code) }}
              </p>
            </div>
          </div>

          <!-- 次要疲惫类型 -->
          <div v-if="result.secondaryType && result.secondaryType.code !== result.primaryType.code"
               class="result-card animate-fade-in" style="animation-delay: 0.2s">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">次要疲惫类型</h3>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span class="text-gray-600 font-bold">{{ result.secondaryType.matchScore }}%</span>
              </div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">{{ result.secondaryType.name }}</h4>
              <p class="text-gray-700 text-sm leading-relaxed">
                {{ getTypeDescription(result.secondaryType.code) }}
              </p>
            </div>
          </div>

          <!-- 场景压力分析 -->
          <div class="result-card animate-fade-in" style="animation-delay: 0.3s">
            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
              场景压力分析
            </h3>
            <div class="space-y-4">
              <div v-for="(score, scene) in result.sceneScores" :key="scene" class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-medium text-gray-800">{{ getSceneName(scene) }}</span>
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-medium" :class="getScoreColor(score)">
                      {{ score.toFixed(1) }}
                    </span>
                    <div class="w-20 bg-gray-200 rounded-full h-2">
                      <div class="score-fill" :class="getScoreBarColor(score)"
                           :style="{ width: `${(score / 5) * 100}%` }"></div>
                    </div>
                  </div>
                </div>
                <div class="ml-2 w-20 bg-gray-200 rounded-full h-2">
                  <div class="score-fill" :class="getScoreBarColor(score)"
                       :style="{ width: `${(score / 5) * 100}%` }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 中间：心理韧性评估 -->
        <div class="space-y-6">
          <div class="result-card animate-fade-in" style="animation-delay: 0.4s">
            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              心理韧性评估
            </h3>
            <div class="text-center py-6">
              <div class="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium"
                   :class="getRecoveryLevelClass(result.recoveryLevel)">
                {{ result.recoveryLabel }}
              </div>
              <div class="mt-4 space-y-3 text-gray-700">
                <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
                  <h4 class="font-semibold text-green-900 mb-2">🧠 心理调节能力</h4>
                  <p class="text-sm">您在面对压力时的自我调节和恢复能力</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200">
                  <h4 class="font-semibold text-blue-900 mb-2">💪 抗压承受力</h4>
                  <p class="text-sm">您对持续压力的承受和处理能力</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-200">
                  <h4 class="font-semibold text-purple-900 mb-2">🔄 恢复速度</h4>
                  <p class="text-sm">您从疲惫状态中恢复的时间和效率</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧：个人特征标签 -->
        <div class="space-y-6">
          <div class="result-card animate-fade-in" style="animation-delay: 0.5s">
            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.707-.293H17" />
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

.score-bar {
  position: relative;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 8px;
}

.score-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
}

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
</style>