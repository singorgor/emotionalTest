<template>
  <div class="question-card overflow-x-hidden">
    <!-- 题目编号和类型标签 -->
    <div class="flex items-center justify-between mb-1">
      <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
        题目 {{ questionNumber }}
      </span>
      <span
        v-if="categoryLabel"
        class="type-badge secondary text-xs"
      >
        {{ categoryLabel }}
      </span>
    </div>

    <!-- 题目内容 -->
    <div class="mb-3">
      <h3 class="text-base font-semibold text-gray-900 leading-tight">
        {{ question.text }}
      </h3>
    </div>

    <!-- 评分选项 -->
    <div class="space-y-2 sm:space-y-1">
      <div
        v-for="option in scaleOptions"
        :key="option.value"
        class="flex items-start gap-2 sm:gap-3 sm:items-center"
      >
        <!-- 评分按钮 -->
        <button
          @click="selectScore(option.value)"
          @keyup.enter="selectScore(option.value)"
          :class="[
            'scale-btn',
            selectedScore === option.value ? 'selected' : '',
            focusedOption === option.value ? 'ring-2 ring-primary-500 ring-offset-2' : ''
          ]"
          :aria-label="`选择${option.label}：${option.description}`"
          :aria-pressed="selectedScore === option.value"
          @focus="focusedOption = option.value"
          @blur="focusedOption = null"
        >
          {{ option.value }}
        </button>

        <!-- 选项说明 -->
        <label
          :for="`question-${question.id}-${option.value}`"
          class="flex-1 cursor-pointer select-none"
          @click="selectScore(option.value)"
        >
          <!-- 移动端：显示简化版本 -->
          <div class="block xs:hidden sm:hidden">
            <div class="font-semibold text-gray-900 text-sm leading-tight mb-1">
              {{ option.label }}
            </div>
            <div class="text-gray-600 text-xs leading-tight line-clamp-1 max-h-4">
              {{ option.description }}
            </div>
          </div>

        <!-- 超小屏幕：极简版本 -->
        <div class="hidden xs:block sm:hidden">
          <div class="font-semibold text-gray-900 text-xs leading-tight">
            {{ option.label }}
          </div>
        </div>

          <!-- 桌面端：显示完整版本 -->
          <div class="hidden sm:flex items-center">
            <span class="font-semibold text-gray-900 mr-2 text-sm whitespace-nowrap">
              {{ option.label }}
            </span>
            <span class="text-gray-600 text-xs">
              {{ option.description }}
            </span>
          </div>
        </label>

        <!-- 隐藏的radio输入框（用于可访问性） -->
        <input
          :id="`question-${question.id}-${option.value}`"
          type="radio"
          :name="`question-${question.id}`"
          :value="option.value"
          :checked="selectedScore === option.value"
          class="sr-only"
          @change="selectScore(option.value)"
        >
      </div>
    </div>

    <!-- 题目说明（可选） -->
    <div
      v-if="showHelper && selectedScore"
      class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
    >
      <p class="text-base text-blue-800">
        💡 您选择了"{{ scaleOptions.find(opt => opt.value === selectedScore)?.label }}"
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Question } from '@/types'
import { SCALE_OPTIONS } from '@/data/questions'

interface Props {
  question: Question
  questionNumber: number
  modelValue?: number
  categoryLabel?: string
  showHelper?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showHelper: false
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'answer-selected': [questionId: string, score: number]
  'auto-next': []
}>()

const selectedScore = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (value !== undefined) {
      emit('update:modelValue', value)
    }
  }
})

const focusedOption = ref<number | null>(null)

const scaleOptions = computed(() => SCALE_OPTIONS)

const selectScore = (score: number) => {
  selectedScore.value = score
  emit('answer-selected', props.question.id, score)

  // 添加触觉反馈（如果支持）
  if (navigator.vibrate) {
    navigator.vibrate(50) // 50ms的震动
  }

  // 触发自动跳转到下一题的事件
  setTimeout(() => {
    emit('auto-next')
  }, 300) // 300ms延迟，让用户看到选中效果
}
</script>

<style scoped>
/* 增强可访问性的焦点样式 */
.scale-btn:focus {
  outline: none;
}

.scale-btn:focus-visible {
  @apply ring-2 ring-primary-500 ring-offset-2;
}

/* 选中状态的视觉反馈 */
.scale-btn.selected {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
}

/* 悬停效果 */
.scale-btn:not(.selected):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 禁用状态（如果需要） */
.scale-btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.scale-btn:disabled:hover {
  transform: none;
  box-shadow: none;
}
</style>