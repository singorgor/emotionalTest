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
      <!-- 疲惫等级概览 -->
      <div class="result-card featured mb-8 animate-fade-in">
        <div class="text-center">
          <div class="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold mb-4"
               :class="`fatigue-${result.fatigueLevel}`">
            {{ result.fatigueLabel }}
          </div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            您的情绪疲惫状态
          </h2>
          <!-- 个性化的总评内容 -->
          <div class="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            <div class="text-center">
              <p class="text-lg mb-4">📊 您的情绪疲惫度分析已完成</p>
              <p class="text-sm text-gray-600">基于您的测试结果，已为您生成个性化详细报告</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- 左侧：类型分析 -->
        <div class="space-y-6 order-2">
          <!-- 主类型分析 -->
          <div class="result-card animate-fade-in order-1" style="animation-delay: 0.1s">
            <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
              疲惫来源类型
            </h3>
            <div class="space-y-4">
              <!-- 主类型 -->
              <div class="border-l-4 border-primary-500 pl-4">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-semibold text-gray-900">{{ result.primaryType.name }}</h4>
                  <div class="flex items-center gap-2">
                    <div class="text-sm text-gray-500">匹配度</div>
                    <div class="font-bold text-primary-600">{{ result.primaryType.matchScore }}%</div>
                  </div>
                </div>
                <!-- 这里后面会放主类型的详细分析 -->
              </div>

              <!-- 副类型 -->
              <div v-if="result.secondaryType && result.secondaryType.code !== result.primaryType.code"
                   class="border-l-4 border-gray-300 pl-4">
                <div class="flex items-center justify-between mb-2">
                  <h5 class="font-medium text-gray-700">{{ result.secondaryType.name }}</h5>
                  <div class="flex items-center gap-2">
                    <div class="text-sm text-gray-500">匹配度</div>
                    <div class="font-medium text-gray-600">{{ result.secondaryType.matchScore }}%</div>
                  </div>
                </div>
                <!-- 这里后面会放副类型的补充分析 -->
              </div>
            </div>
          </div>

          <!-- 场景分析 -->
          <div class="result-card content-section animate-fade-in" style="animation-delay: 0.2s">
            <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
              场景掉血情况
            </h3>
            <div class="space-y-4">
              <div v-for="(score, scene) in result.sceneScores" :key="scene" class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-medium text-gray-700">{{ getSceneName(scene) }}</span>
                  <span class="text-sm font-medium" :class="getScoreColor(score)">
                    {{ score.toFixed(1) }}
                  </span>
                </div>
                <div class="score-bar">
                  <div
                    class="score-fill"
                    :class="getScoreBarColor(score)"
                    :style="{ width: `${(score / 5) * 100}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧：恢复力和建议 -->
        <div class="space-y-6 order-1">
          <!-- 恢复力评估 -->
          <div class="result-card content-section animate-fade-in order-1" style="animation-delay: 0.3s">
            <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              恢复力评估
            </h3>
            <div class="text-center py-6">
              <div class="inline-flex items-center px-4 py-2 rounded-full"
                   :class="getRecoveryLevelClass(result.recoveryLevel)">
                {{ result.recoveryLabel }}
              </div>
              <!-- 这里后面会放恢复力的详细分析 -->
            </div>
          </div>

          <!-- 个性化标签 -->
          <div class="result-card content-section animate-fade-in" style="animation-delay: 0.4s">
            <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
              关键特征
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in result.personalTags"
                :key="tag"
                class="type-badge primary text-sm"
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
          <h3>专业建议</h3>
          <div class="prose prose-gray max-w-none">
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
import { computed, ref } from 'vue'
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

// 获取恢复力等级样式
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
</style>