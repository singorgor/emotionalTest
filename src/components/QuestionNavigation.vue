<template>
  <div class="flex items-center justify-between p-4 bg-white border-t border-gray-200">
    <!-- 左侧：上一题按钮 -->
    <div class="flex items-center gap-4">
      <button
        @click="goPrevious"
        :disabled="!hasPrevious"
        class="btn btn-secondary flex items-center gap-2"
        :class="{ 'opacity-50 cursor-not-allowed': !hasPrevious }"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        上一题
      </button>

      <!-- 题目编号指示器 -->
      <div class="hidden sm:flex items-center gap-2 text-base text-gray-600">
        <span>{{ currentIndex + 1 }}</span>
        <span class="text-gray-400">/</span>
        <span>{{ totalQuestions }}</span>
      </div>
    </div>

    <!-- 中间：题目导航点 -->
    <div class="flex items-center gap-2 overflow-x-auto py-2 px-4 max-w-md">
      <button
        v-for="(q, index) in questions"
        :key="q.id"
        @click="goToQuestion(index)"
        :class="[
          'w-4 h-4 rounded-full flex-shrink-0 transition-all duration-200',
          index === currentIndex ? 'bg-primary-600 scale-125' :
          answers[q.id] !== undefined ? 'bg-green-500' :
          'bg-gray-300 hover:bg-gray-400'
        ]"
        :title="`题目 ${index + 1}${answers[q.id] !== undefined ? ' (已完成)' : ' (未完成)'}`"
        :aria-label="`跳转到题目 ${index + 1}`"
      />
    </div>

    <!-- 右侧：下一题/提交按钮 -->
    <div class="flex items-center gap-4">
      <!-- 模块进度提示 -->
      <div v-if="currentModuleProgress" class="hidden lg:block text-base text-gray-600">
        <span>{{ currentModuleProgress.name }}: </span>
        <span class="font-medium">{{ currentModuleProgress.completed }}/{{ currentModuleProgress.total }}</span>
      </div>

      <button
        v-if="hasNext"
        @click="goNext"
        :disabled="!canGoNext"
        class="btn btn-primary flex items-center gap-2"
        :class="{ 'opacity-50 cursor-not-allowed': !canGoNext }"
      >
        下一题
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        v-else
        @click="submit"
        :disabled="!canSubmit"
        class="btn btn-primary flex items-center gap-2"
        :class="{ 'opacity-50 cursor-not-allowed': !canSubmit }"
      >
        <span>提交测试</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  </div>

  <!-- 移动端下拉式题目导航 -->
  <div class="sm:hidden border-t border-gray-200 p-4">
    <div class="flex items-center justify-between mb-3">
      <span class="text-base text-gray-600">快速跳转</span>
      <button
        @click="showMobileNav = !showMobileNav"
        class="text-primary-600 text-base flex items-center gap-1"
      >
        {{ currentIndex + 1 }} / {{ totalQuestions }}
        <svg class="w-4 h-4" :class="{ 'rotate-180': showMobileNav }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <!-- 移动端导航网格 -->
    <div
      v-if="showMobileNav"
      class="grid grid-cols-8 gap-2 p-4 bg-gray-50 rounded-lg"
    >
      <button
        v-for="(q, index) in questions"
        :key="q.id"
        @click="goToQuestionMobile(index)"
        :class="[
          'w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center',
          index === currentIndex ? 'bg-primary-600 text-white' :
          answers[q.id] !== undefined ? 'bg-green-500 text-white' :
          'bg-white border border-gray-300 text-gray-600'
        ]"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Question } from '@/types'
import { useFatigueTestStore } from '@/stores/fatigueTest'
import { QUESTION_CONFIG } from '@/data/questions'

interface Props {
  questions: Question[]
  currentIndex: number
  answers: Record<string, number>
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'go-to-question': [index: number]
  'go-previous': []
  'go-next': []
  'submit': []
}>()

const fatigueTestStore = useFatigueTestStore()
const showMobileNav = ref(false)

// 计算属性
const hasPrevious = computed(() => props.currentIndex > 0)
const hasNext = computed(() => props.currentIndex < props.questions.length - 1)

const canGoNext = computed(() => {
  const currentQuestion = props.questions[props.currentIndex]
  return props.answers[currentQuestion.id] !== undefined
})

const canSubmit = computed(() => {
  return fatigueTestStore.canSubmit
})

const totalQuestions = computed(() => props.questions.length)

// 当前模块进度
const currentModuleProgress = computed(() => {
  const currentQuestion = props.questions[props.currentIndex]
  const questionId = currentQuestion.id

  let moduleName = ''
  let moduleQuestions: string[] = []

  // 根据题目ID判断所属模块
  if (questionId.startsWith('A')) {
    moduleName = '整体疲惫强度'
    moduleQuestions = QUESTION_CONFIG.A.questions.map(q => q.id)
  } else if (questionId.startsWith('B')) {
    if (['B1', 'B2', 'B3', 'B4'].includes(questionId)) {
      moduleName = '工作/学习'
      moduleQuestions = QUESTION_CONFIG.B.subcategories.work.questions.map(q => q.id)
    } else if (['B5', 'B6', 'B7', 'B8'].includes(questionId)) {
      moduleName = '人际/家庭'
      moduleQuestions = QUESTION_CONFIG.B.subcategories.relationship.questions.map(q => q.id)
    } else {
      moduleName = '自我要求'
      moduleQuestions = QUESTION_CONFIG.B.subcategories.selfDemand.questions.map(q => q.id)
    }
  } else if (questionId.startsWith('C')) {
    moduleName = '疲惫来源类型'
    moduleQuestions = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16']
  } else if (questionId.startsWith('D')) {
    moduleName = '恢复资源'
    moduleQuestions = QUESTION_CONFIG.D.questions.map(q => q.id)
  }

  const completed = moduleQuestions.filter(id => props.answers[id] !== undefined).length

  return {
    name: moduleName,
    completed,
    total: moduleQuestions.length
  }
})

// 方法
const goPrevious = () => {
  if (hasPrevious.value) {
    emit('go-previous')
  }
}

const goNext = () => {
  if (hasNext.value && canGoNext.value) {
    emit('go-next')
  }
}

const goToQuestion = (index: number) => {
  showMobileNav.value = false
  emit('go-to-question', index)
}

const goToQuestionMobile = (index: number) => {
  showMobileNav.value = false
  emit('go-to-question', index)
}

const submit = () => {
  if (canSubmit.value) {
    emit('submit')
  }
}
</script>

<style scoped>
/* 题目导航点动画 */
.scale-125 {
  transform: scale(1.25);
}

/* 移动端下拉动画 */
.rotate-180 {
  transform: rotate(180deg);
}
</style>