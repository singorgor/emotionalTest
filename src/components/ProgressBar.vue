<template>
  <div class="w-full">
    <!-- 进度信息 -->
    <div class="flex justify-between items-center mb-3">
      <span class="text-sm font-medium text-gray-700">
        进度
      </span>
      <span class="text-sm text-gray-500">
        {{ answeredCount }} / {{ totalQuestions }} 题
      </span>
    </div>

    <!-- 进度条 -->
    <div class="progress-bar">
      <div
        class="progress-fill bg-gradient-to-r from-blue-500 to-blue-600"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>

    <!-- 百分比显示 -->
    <div class="flex justify-between items-center mt-3">
      <span class="text-xs text-gray-500">
        完成度: {{ percentage }}%
      </span>
      <div v-if="showEta && estimatedTimeRemaining" class="text-xs text-gray-500">
        预计剩余: {{ estimatedTimeRemaining }}分钟
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  answeredCount: number
  totalQuestions: number
  showEta?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showEta: true
})

// 计算百分比
const percentage = computed(() => {
  return Math.round((props.answeredCount / props.totalQuestions) * 100)
})

// 估算剩余时间（假设每题30秒）
const estimatedTimeRemaining = computed(() => {
  const remainingQuestions = props.totalQuestions - props.answeredCount
  const estimatedMinutes = Math.ceil((remainingQuestions * 0.5) / 60)
  return estimatedMinutes > 0 ? estimatedMinutes : null
})
</script>

<style scoped>
.progress-bar {
  height: 8px;
}

.progress-fill {
  min-width: 2px; /* 确保即使0%也有一点可见的进度 */
  border-radius: 4px;
}

/* 进度条动画 */
.progress-fill {
  transition: width 0.3s ease-out;
}
</style>