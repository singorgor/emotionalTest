<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- 顶部进度条和标题 -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">FBI 情绪疲惫度测试</h1>
            <p class="text-sm text-gray-600 mt-1">请根据您最近的真实感受回答</p>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-primary-600">{{ fatigueTestStore.progress }}%</div>
            <div class="text-xs text-gray-500">完成度</div>
          </div>
        </div>

        <!-- 进度条 -->
        <div class="mt-4">
          <ProgressBar
            :answered-count="fatigueTestStore.answeredCount"
            :total-questions="fatigueTestStore.totalQuestions"
            :show-eta="true"
          />
        </div>
      </div>
    </div>

    <!-- 题目内容区域 -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <!-- 模块标题 -->
      <div
        v-if="currentModuleInfo"
        class="text-center mb-8 animate-fade-in"
      >
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          {{ currentModuleInfo.title }}
        </h2>
        <p class="text-gray-600">{{ currentModuleInfo.description }}</p>
      </div>

      <!-- 当前题目 -->
      <div class="max-w-2xl mx-auto">
        <QuestionItem
          v-if="currentQuestion"
          :question="currentQuestion"
          :question-number="fatigueTestStore.currentQuestionIndex + 1"
          :category-label="getCategoryLabel(currentQuestion)"
          :model-value="fatigueTestStore.answers[currentQuestion.id]"
          @update:model-value="saveAnswer"
          @answer-selected="onAnswerSelected"
        />

        <!-- 未找到题目时的提示 -->
        <div v-else class="card p-8 text-center">
          <div class="text-gray-500">题目加载中...</div>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <QuestionNavigation
        :questions="allQuestions"
        :current-index="fatigueTestStore.currentQuestionIndex"
        :answers="fatigueTestStore.answers"
        @go-to-question="goToQuestion"
        @go-previous="goPrevious"
        @go-next="goNext"
        @submit="submitTest"
      />
    </div>

    <!-- 为底部导航留出空间 -->
    <div class="h-32"></div>

    <!-- 提交确认对话框 -->
    <div
      v-if="showSubmitDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click.self="showSubmitDialog = false"
    >
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-slide-up">
        <h3 class="text-xl font-bold text-gray-900 mb-4">确认提交测试</h3>

        <!-- 完成情况检查 -->
        <div class="mb-6">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 class="font-medium text-blue-900 mb-2">测试完成情况</h4>
            <div class="space-y-2 text-sm text-blue-800">
              <div class="flex justify-between">
                <span>整体进度:</span>
                <span class="font-medium">{{ fatigueTestStore.answeredCount }} / {{ fatigueTestStore.totalQuestions }} 题</span>
              </div>
              <div class="flex justify-between">
                <span>预计用时:</span>
                <span class="font-medium">{{ Math.round((fatigueTestStore.duration || 0) / 60) }} 分钟</span>
              </div>
            </div>
          </div>

          <!-- 警告信息 -->
          <div v-if="validation.warnings.length > 0" class="mt-4">
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 class="font-medium text-yellow-900 mb-2">注意事项</h4>
              <ul class="space-y-1 text-sm text-yellow-800">
                <li v-for="warning in validation.warnings" :key="warning" class="flex items-start">
                  <span class="text-yellow-600 mr-2">⚠️</span>
                  <span>{{ warning }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="flex gap-3">
          <button
            @click="showSubmitDialog = false"
            class="btn btn-secondary flex-1"
          >
            再检查一下
          </button>
          <button
            @click="confirmSubmit"
            :disabled="submitting"
            class="btn btn-primary flex-1"
          >
            <span v-if="!submitting">确认提交</span>
            <span v-else class="loading-dots">生成报告中</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 计算结果遮罩 -->
    <div
      v-if="submitting"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        <div class="mb-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">正在生成您的个性化报告</h3>
          <p class="text-gray-600">请稍候，我们正在分析您的答案并生成专属报告...</p>
        </div>
        <div class="space-y-2 text-sm text-gray-500">
          <div class="flex items-center justify-center gap-2">
            <span class="loading-dots">计算疲惫等级</span>
          </div>
          <div class="flex items-center justify-center gap-2">
            <span class="loading-dots">分析疲惫来源</span>
          </div>
          <div class="flex items-center justify-center gap-2">
            <span class="loading-dots">生成个性化建议</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useFatigueTestStore } from '@/stores/fatigueTest'
import { QUESTION_CONFIG } from '@/data/questions'
import ProgressBar from '@/components/ProgressBar.vue'
import QuestionItem from '@/components/QuestionItem.vue'
import QuestionNavigation from '@/components/QuestionNavigation.vue'
import type { Question } from '@/types'

const router = useRouter()
const fatigueTestStore = useFatigueTestStore()

const submitting = ref(false)
const showSubmitDialog = ref(false)

// 获取所有题目（按顺序排列）
const allQuestions = computed((): Question[] => {
  const questions: Question[] = []

  // A模块题目
  questions.push(...QUESTION_CONFIG.A.questions)

  // B模块题目
  questions.push(...QUESTION_CONFIG.B.subcategories.work.questions)
  questions.push(...QUESTION_CONFIG.B.subcategories.relationship.questions)
  questions.push(...QUESTION_CONFIG.B.subcategories.selfDemand.questions)

  // C模块题目
  questions.push(...QUESTION_CONFIG.C.subtypes.emotional_overload.questions)
  questions.push(...QUESTION_CONFIG.C.subtypes.responsibility_trap.questions)
  questions.push(...QUESTION_CONFIG.C.subtypes.comparison_anxiety.questions)
  questions.push(...QUESTION_CONFIG.C.subtypes.high_pressure_mode.questions)

  // D模块题目
  questions.push(...QUESTION_CONFIG.D.questions)

  return questions
})

// 当前题目
const currentQuestion = computed(() => {
  return allQuestions.value[fatigueTestStore.currentQuestionIndex]
})

// 当前模块信息
const currentModuleInfo = computed(() => {
  const currentQuestion = allQuestions.value[fatigueTestStore.currentQuestionIndex]
  if (!currentQuestion) return null

  const questionId = currentQuestion.id

  if (questionId.startsWith('A')) {
    return {
      title: QUESTION_CONFIG.A.title,
      description: QUESTION_CONFIG.A.description
    }
  } else if (questionId.startsWith('B')) {
    return {
      title: QUESTION_CONFIG.B.title,
      description: QUESTION_CONFIG.B.description
    }
  } else if (questionId.startsWith('C')) {
    return {
      title: QUESTION_CONFIG.C.title,
      description: QUESTION_CONFIG.C.description
    }
  } else if (questionId.startsWith('D')) {
    return {
      title: QUESTION_CONFIG.D.title,
      description: QUESTION_CONFIG.D.description
    }
  }

  return null
})

// 答案验证
const validation = computed(() => {
  return fatigueTestStore.validateAnswers()
})

// 获取题目类别标签
const getCategoryLabel = (question: Question): string => {
  const questionId = question.id

  if (questionId.startsWith('A')) {
    return '整体疲惫强度'
  } else if (questionId.startsWith('B')) {
    if (['B1', 'B2', 'B3', 'B4'].includes(questionId)) return '工作/学习'
    if (['B5', 'B6', 'B7', 'B8'].includes(questionId)) return '人际/家庭'
    if (['B9', 'B10', 'B11', 'B12'].includes(questionId)) return '自我要求'
  } else if (questionId.startsWith('C')) {
    if (['C1', 'C2', 'C3', 'C4'].includes(questionId)) return '情绪过载型'
    if (['C5', 'C6', 'C7', 'C8'].includes(questionId)) return '责任绑架型'
    if (['C9', 'C10', 'C11', 'C12'].includes(questionId)) return '对比焦虑型'
    if (['C13', 'C14', 'C15', 'C16'].includes(questionId)) return '高压稳定型'
  } else if (questionId.startsWith('D')) {
    return '恢复资源'
  }

  return ''
}

// 保存答案
const saveAnswer = (score: number) => {
  if (currentQuestion.value) {
    fatigueTestStore.saveAnswer(currentQuestion.value.id, score)
  }
}

// 答案选择后的处理
const onAnswerSelected = (questionId: string, score: number) => {
  // 可以在这里添加其他逻辑，比如自动跳转等
  console.log(`Question ${questionId} answered with score ${score}`)
}

// 导航方法
const goToQuestion = (index: number) => {
  fatigueTestStore.goToQuestion(index)
}

const goPrevious = () => {
  fatigueTestStore.previousQuestion()
}

const goNext = () => {
  fatigueTestStore.nextQuestion()
}

// 提交测试
const submitTest = () => {
  if (fatigueTestStore.canSubmit) {
    showSubmitDialog.value = true
  }
}

// 确认提交
const confirmSubmit = async () => {
  submitting.value = true
  showSubmitDialog.value = false

  try {
    // 手动计算基础结果（不使用calculateResults，因为它会自动跳转）
    if (!fatigueTestStore.canSubmit) {
      throw new Error('还有题目未完成')
    }

    fatigueTestStore.isCalculating = true

    // 模拟计算延迟，让用户看到加载状态
    await new Promise(resolve => setTimeout(resolve, 1500))

    // 计算结果（但不跳转）
    const { calculateFatigueResult } = await import('@/utils/calculator')
    fatigueTestStore.result = calculateFatigueResult(fatigueTestStore.answers)
    fatigueTestStore.endTime = Date.now()

    // 生成完整报告并存储到store中
    await generateDetailedReport()

    // 重置提交状态
    submitting.value = false
    fatigueTestStore.isCalculating = false

    console.log('报告生成完成，准备跳转到结果页面')

    // 跳转到结果页面
    router.push('/results')
  } catch (error) {
    console.error('提交测试失败:', error)
    // 可以显示错误提示
    submitting.value = false
    fatigueTestStore.isCalculating = false
  }
}

// 生成详细报告
const generateDetailedReport = async () => {
  console.log('开始生成详细报告...')

  if (fatigueTestStore.result) {
    console.log('测试结果存在，开始生成报告内容')

    // 使用报告模板生成内容
    const reportContent = generateReportContent(fatigueTestStore.result)

    console.log('报告内容生成完成，长度:', reportContent.length)

    // 将报告存储到store中
    fatigueTestStore.setDetailedReport(reportContent)

    console.log('报告已存储到store')
  } else {
    console.error('没有找到测试结果，无法生成报告')
  }
}

// 根据测试结果生成报告内容
const generateReportContent = (testResult: any) => {
  // 这里使用报告个性化话术库中的模板
  const fatigueLevel = testResult.fatigueLevel || 1

  // 疲惫等级总评
  const overviewTemplates: Record<number, string> = {
    0: '你现在处于【0级 · 安全区】，整体的情绪状态相对稳定，没有明显的疲惫积累。从测评结果看，你目前没有严重的情绪消耗，恢复资源相对充足。这是一个很好的基础状态，建议你保持现有的自我觉察习惯，定期关注自己的情绪变化。',
    1: '你目前处于【1级 · 轻度疲惫】，可能最近有一些小事让你觉得有点心累，但整体还在可控范围内。这种状态很多人都会经历，通常是因为某些场景或压力开始悄悄消耗你的心理能量。好消息是，你及时发现并关注到了这些信号，这是很好的自我觉察。',
    2: '你目前处于【2级 · 中度疲惫】，说明你的情绪能量已经有明显的消耗，可能经常感到疲惫、提不起精神。这个程度已经不是"休息一下就能好"的程度了，而是需要主动关注和调整的状态。你的疲惫感可能来自于特定的场景压力，或者是长期的某些行为模式导致的累积。',
    3: '你目前处于【3级 · 高度疲惫】，这表明你的情绪和心理资源已经被严重消耗，长期处于"硬撑"的状态。从测评结果看，你的疲惫已经不仅仅是累，而是深层次的心理耗竭。可能的表现包括：对很多事情失去兴趣、情绪容易波动、即使休息也感觉恢复不过来、经常感到力不从心。',
    4: '你目前处于【4级 · 极度疲惫】，这是情绪耗竭的最高等级，说明你的心理资源已经严重透支，可能已经影响到日常生活和正常功能。在这个状态下，你可能感到：对什么都提不起兴趣、记忆力注意力下降、情绪极度不稳定、身体也出现各种不适症状。'
  }

  const primaryType = testResult.primaryType?.name || '综合压力型'
  const recoveryLevel = testResult.recoveryLevel || 'medium'

  // 专业建议内容
  const adviceContent = `
    <div class="space-y-6">
      <div class="border-l-4 border-indigo-500 pl-4">
        <h4 class="font-semibold text-lg text-gray-900 mb-2">总体分析</h4>
        <p class="text-gray-700 leading-relaxed">${overviewTemplates[fatigueLevel] || overviewTemplates[1]}</p>
      </div>

      <div class="border-l-4 border-blue-500 pl-4">
        <h4 class="font-semibold text-lg text-gray-900 mb-2">主要疲惫来源</h4>
        <p class="text-gray-700 leading-relaxed">根据测评结果，您的疲惫主要来源于【${primaryType}】。这种类型的疲惫往往与您的生活和工作模式密切相关，需要从根源上进行调整。</p>
      </div>

      <div class="border-l-4 border-green-500 pl-4">
        <h4 class="font-semibold text-lg text-gray-900 mb-2">恢复力评估</h4>
        <p class="text-gray-700 leading-relaxed">您的恢复力处于${recoveryLevel === 'high' ? '较好' : recoveryLevel === 'medium' ? '中等' : '偏低'}水平。${recoveryLevel === 'low' ? '建议您重点关注休息质量的提升，建立更有效的恢复习惯。' : '继续保持良好的恢复习惯，这将有助于您更好地应对生活中的压力。'}</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold text-lg text-gray-900 mb-3">行动建议</h4>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start">
            <span class="text-indigo-500 mr-2">•</span>
            <span>建立规律的作息时间，确保充足的睡眠质量</span>
          </li>
          <li class="flex items-start">
            <span class="text-indigo-500 mr-2">•</span>
            <span>学会设置健康的边界，适当拒绝额外的工作和社交活动</span>
          </li>
          <li class="flex items-start">
            <span class="text-indigo-500 mr-2">•</span>
            <span>培养1-2个能真正让您放松的兴趣爱好</span>
          </li>
          <li class="flex items-start">
            <span class="text-indigo-500 mr-2">•</span>
            <span>定期与信任的朋友或家人交流，分享自己的感受和压力</span>
          </li>
          <li class="flex items-start">
            <span class="text-indigo-500 mr-2">•</span>
            <span>如果疲惫感持续加重，建议寻求专业的心理健康支持</span>
          </li>
        </ul>
      </div>

      <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <p class="text-blue-900 text-sm leading-relaxed">
          <strong>温馨提示：</strong>情绪疲惫的恢复是一个渐进的过程，需要耐心和持续的关注。请记住，寻求帮助和关注自己的心理健康不是软弱的表现，而是对自己负责的智慧选择。
        </p>
      </div>
    </div>
  `

  return adviceContent
}

// 监听题目变化，自动保存
watch(
  () => fatigueTestStore.currentQuestionIndex,
  (newIndex, oldIndex) => {
    // 当用户手动跳转时，保存当前位置
    if (Math.abs(newIndex - oldIndex) > 1) {
      console.log(`Jumped to question ${newIndex + 1}`)
    }
  }
)

// 页面挂载时的处理
onMounted(() => {
  // 检查是否应该在这里
  if (fatigueTestStore.currentStep !== 'questionnaire') {
    router.push('/')
  }

  // 恢复答案（如果有的话）
  fatigueTestStore.restoreAnswers()
})
</script>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 为固定导航留出空间 */
@media (min-width: 768px) {
  .h-32 {
    height: 8rem; /* 在桌面端给更多空间 */
  }
}
</style>