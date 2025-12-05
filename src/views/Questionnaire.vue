<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- 顶部进度条和标题 -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-2xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-lg font-bold text-gray-900">情绪疲惫度测试</h1>
            <p class="text-xs text-gray-600 mt-1">请根据您最近的真实感受回答</p>
          </div>
          <div class="text-right">
            <div class="text-lg font-bold text-primary-600">{{ fatigueTestStore.progress }}%</div>
            <div class="text-xs text-gray-500">完成度</div>
          </div>
        </div>

        <!-- 进度条 -->
        <div class="mt-3">
          <ProgressBar
            :answered-count="fatigueTestStore.answeredCount"
            :total-questions="fatigueTestStore.totalQuestions"
            :show-eta="true"
          />
        </div>

        <!-- 量表说明 -->
        <div class="mt-2 p-2 bg-amber-50 border border-amber-200 rounded-lg">
          <p class="text-amber-700 text-xs leading-relaxed">
            <strong>量表说明：</strong>本量表参考情绪耗竭（Emotional Exhaustion）、职业倦怠（Burnout）及主观疲劳相关研究思路编制，用于日常自我觉察，不作为医疗或心理诊断依据。
          </p>
        </div>
      </div>
    </div>

    <!-- 题目内容区域 -->
    <div class="max-w-2xl mx-auto px-4 py-4">
      <!-- 模块标题 -->
      <div
        v-if="currentModuleInfo"
        class="text-center mb-4 animate-fade-in"
      >
        <h2 class="text-base font-semibold text-gray-900 mb-1">
          {{ currentModuleInfo.title }}
        </h2>
        <p class="text-gray-600 text-xs">{{ currentModuleInfo.description }}</p>
      </div>

      <!-- 当前题目 -->
      <div class="max-w-2xl mx-auto">
        <transition name="question-slide" mode="out-in">
          <QuestionItem
            v-if="currentQuestion"
            :key="currentQuestion.id"
            :question="currentQuestion"
            :question-number="fatigueTestStore.currentQuestionIndex + 1"
            :category-label="getCategoryLabel(currentQuestion)"
            :model-value="fatigueTestStore.answers[currentQuestion.id]"
            @update:model-value="saveAnswer"
            @answer-selected="onAnswerSelected"
            @auto-next="handleAutoNext"
          />

          <!-- 未找到题目时的提示 -->
          <div v-else class="card p-12 text-center">
            <div class="text-gray-500 text-lg">题目加载中...</div>
          </div>
        </transition>
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
    <div class="h-20"></div>

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
import { QUESTION_CONFIG, FATIGUE_LEVEL_LABELS } from '@/data/questions'
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
    return '心理韧性'
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

// 处理自动跳转到下一题
const handleAutoNext = () => {
  // 检查是否还有下一题
  if (fatigueTestStore.currentQuestionIndex < allQuestions.value.length - 1) {
    // 自动跳转到下一题
    fatigueTestStore.nextQuestion()
  } else {
    // 如果是最后一题，可以自动触发提交提示
    // 这里选择不自动提交，让用户自己决定
    console.log('已是最后一题，等待用户提交')
  }
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
    const reportContent = generateReportContent(
      fatigueTestStore.result,
      fatigueTestStore.duration
    )

    console.log('报告内容生成完成，长度:', reportContent.length)

    // 将报告存储到store中
    fatigueTestStore.setDetailedReport(reportContent)

    console.log('报告已存储到store')
  } else {
    console.error('没有找到测试结果，无法生成报告')
  }
}

// 根据测试结果生成深度个性化报告内容
const generateReportContent = (testResult: any, durationSeconds?: number | null) => {
  const fatigueLevel = testResult.fatigueLevel ?? 1
  const fatigueLabel = testResult.fatigueLabel ?? FATIGUE_LEVEL_LABELS[fatigueLevel as keyof typeof FATIGUE_LEVEL_LABELS]
  const primaryType = testResult.primaryType
  const secondaryType = testResult.secondaryType
  const sceneScores = testResult.sceneScores || {}
  const recoveryLevel = testResult.recoveryLevel || 'medium'
  const personalTags = testResult.personalTags || []
  const reportDuration = durationSeconds ?? testResult.duration ?? null

  // ========== 1. 深度心理洞察 ==========
  const psychologicalInsight = generatePsychologicalInsight(fatigueLevel, primaryType, sceneScores, personalTags)

  // ========== 2. 行为模式深度解读 ==========
  const behaviorAnalysis = generateBehaviorAnalysis(primaryType, sceneScores, recoveryLevel)

  // ========== 3. 具体场景分析 ==========
  const scenarioAnalysis = generateScenarioAnalysis(sceneScores, fatigueLevel)

  // ========== 4. 深层原因挖掘 ==========
  const rootCauseAnalysis = generateRootCauseAnalysis(primaryType, sceneScores, fatigueLevel)

  // ========== 5. 分级干预策略 ==========
  const interventionStrategies = generateInterventionStrategies(fatigueLevel, primaryType, sceneScores, recoveryLevel)

  // ========== 6. 个性化行动方案 ==========
  const actionPlan = generateActionPlan(fatigueLevel, primaryType, sceneScores, personalTags, recoveryLevel)

  // ========== 7. 专业评估与建议 ==========
  const professionalAssessment = generateProfessionalAssessment(fatigueLevel, recoveryLevel, sceneScores)

  // 整合完整报告
  const fullReport = `
    <div class="comprehensive-report">
      <!-- 报告头部 -->
      <div class="report-header border-l-4 border-indigo-600 bg-indigo-50 mb-8 p-6 rounded-xl">
        <h2 class="text-2xl font-bold text-indigo-900 mb-4">🧠 深度情绪疲惫度分析报告</h2>
        <div class="text-indigo-700">
          <p class="mb-3"><strong>测评时间：</strong>${new Date().toLocaleDateString()} | 用时：${reportDuration !== null ? formatDuration(reportDuration) : '未知'}</p>
          <p class="text-lg"><strong>核心诊断：</strong>${fatigueLabel}</p>
          <p class="text-sm">主要疲惫类型：${primaryType?.name || '综合压力型'}（匹配度：${primaryType?.matchScore || 0}%）</p>
          ${secondaryType && secondaryType.code !== primaryType.code ? `<p class="text-sm">次要类型：${secondaryType.name}（匹配度：${secondaryType.matchScore}%）</p>` : ''}
        </div>
      </div>

      <!-- 第一部分：深度心理洞察 -->
      ${psychologicalInsight}

      <!-- 第二部分：行为模式深度解读 -->
      ${behaviorAnalysis}

      <!-- 第三部分：具体场景分析 -->
      ${scenarioAnalysis}

      <!-- 第四部分：深层原因挖掘 -->
      ${rootCauseAnalysis}

      <!-- 第五部分：分级干预策略 -->
      ${interventionStrategies}

      <!-- 第六部分：个性化行动方案 -->
      ${actionPlan}

      <!-- 第七部分：专业评估与建议 -->
      ${professionalAssessment}

      <!-- 温馨提示 -->
      <div class="bg-blue-50 border-l-4 border-blue-300 p-4 rounded-lg mt-6">
        <h4 class="text-blue-900 font-semibold mb-3">💡 重要提醒</h4>
        <div class="text-blue-800 text-sm leading-relaxed space-y-2">
          <p>• 这份报告基于您当前的心理状态绘制，情绪恢复是一个渐进的过程，需要持续的关注和耐心。</p>
          <p>• 如果疲惫感持续加重，或出现严重的心理困扰，请及时寻求专业的心理咨询师或治疗师的帮助。</p>
          <p>• 建议您定期（比如每2-3个月）重新测评，跟踪自己的情绪状态变化。</p>
        </div>
    </div>
  `

  return fullReport
}

// 格式化测试时间
const formatDuration = (seconds: number | null): string => {
  if (seconds === null) return '未知'
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return remainingSeconds > 0 ? `${minutes}分${remainingSeconds}秒` : `${minutes}分钟`
}

// 生成深度心理洞察
function generatePsychologicalInsight(fatigueLevel: number, primaryType: any, _sceneScores: any, _personalTags: string[]) {
  const levelLabels = ['情绪稳定', '轻度疲劳', '中度耗竭', '重度透支', '极度崩溃']
  const currentLevel = levelLabels[fatigueLevel] || levelLabels[1]

  let typeInsight = ''
  switch(primaryType?.code) {
    case 'type_emotional_overload':
      typeInsight = '您是一个高敏感、高共情能力的人，容易吸收他人的负面情绪而承担过重的心理负担。这种"情绪海绵"特质让您在人际交往中过度付出，却缺乏有效的自我保护机制。'
      break
    case 'type_responsibility_trap':
      typeInsight = '您有强烈的责任感和完美主义倾向，习惯性地将他人需求置于自己需求之前，很难拒绝额外的工作和社交活动。这种"老好人"模式正在持续消耗您的心理资源。'
      break
    case 'type_comparison_anxiety':
      typeInsight = '您容易与他人进行比较，对自己有过高的期望和要求，经常处于"不够好"的焦虑状态。这种持续的自我评价和比较正在消耗您宝贵的心理能量。'
      break
    case 'type_high_pressure_mode':
      typeInsight = '您习惯于高强度、快节奏的生活方式和工作模式，很难真正放松下来，即使休息时也保持着"待机"状态。这种持续运转模式已经让您失去了与内心真实需求的连接。'
      break
    default:
      typeInsight = '您正在经历多方面的压力累积，需要在生活中重新平衡各种角色和需求。'
  }

  return `
    <div class="insight-section border-l-4 border-purple-500 bg-purple-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-purple-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-purple-200 rounded-full mr-3"></span>
        深度心理洞察
      </h3>

      <div class="space-y-4 text-gray-700">
        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🎯 您的核心心理特征</h4>
          <p class="leading-relaxed">${typeInsight}</p>
        </div>

        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🧠 当前状态解读</h4>
          <p class="leading-relaxed">您目前处于<strong>${currentLevel}</strong>状态。这种状态意味着您的情绪调节能力正在下降，心理资源消耗速度已经超过恢复速度。如果不及时干预，可能会进一步恶化为更深层的情绪问题。</p>
          ${fatigueLevel >= 2 ? `
          <div class="mt-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-200">
            <p class="text-red-800"><strong>⚠️ 警示信号：</strong>您的情绪系统已经发出明显的求助信号，日常功能可能开始受到影响。这是您需要认真对待并采取行动的时刻。</p>
          </div>
          ` : ''}
        </div>

        ${_personalTags.length > 0 ? `
        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🏷️ 个性化特征标签</h4>
          <div class="flex flex-wrap gap-2">
            ${_personalTags.map((tag: any) => `<span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">${tag}</span>`).join('')}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `
}

// 生成行为模式深度解读
function generateBehaviorAnalysis(_primaryType: any, _sceneScores: any, _recoveryLevel: string) {
  return `
    <div class="behavior-section border-l-4 border-blue-500 bg-blue-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-blue-200 rounded-full mr-3"></span>
        行为模式深度解读
      </h3>

      <div class="space-y-4">
        <div class="bg-white p-4 rounded-lg border-l-4 border-blue-200">
            <h4 class="font-semibold text-blue-900 mb-3">🔄 典型行为循环</h4>
            <div class="space-y-2 text-gray-700">
              <p><strong>触发阶段：</strong>遇到压力源 → 激活应对模式 → 产生情绪反应 → 承担后果 → 恢复阶段</p>
              <p><strong>您的模式：</strong>基于您的测评结果，您经常陷入<strong>"过度付出-疲惫积累-继续坚持"</strong>的循环，缺乏有效的暂停和重新评估机制。</p>
            </div>
          </div>

        <div class="bg-white p-4 rounded-lg border-l-4 border-blue-200">
            <h4 class="font-semibold text-blue-900 mb-3">💭 认知偏差识别</h4>
            <div class="space-y-2 text-gray-700">
              <p>• <strong>完美主义倾向：</strong>可能过度追求高标准，难以接受"足够好"的结果</p>
              <p>• <strong>责任偏差：</strong>过度承担他人的情绪需求和责任</p>
              <p>• <strong>恢复误区：</strong>认为休息就能解决问题，而忽视了深层的模式调整</p>
            </div>
          </div>
      </div>
    </div>
  `
}

// 生成具体场景分析
function generateScenarioAnalysis(_sceneScores: any, _fatigueLevel: number) {
  const workScore = _sceneScores.work || 0
  const relationshipScore = _sceneScores.relationship || 0
  const selfDemandScore = _sceneScores.selfDemand || 0

  return `
    <div class="scenario-section border-l-4 border-orange-500 bg-orange-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-orange-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-orange-200 rounded-full mr-3"></span>
        具体场景深度分析
      </h3>

      <div class="space-y-6">
        ${workScore >= 3.0 ? `
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">💼 工作场景高压状态</h4>
          <p class="text-red-800 leading-relaxed">您的工作压力评分为<strong>${workScore.toFixed(1)}</strong>，这表明您的工作环境或工作方式正在严重消耗您的心理资源。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：难以集中注意力、工作效率下降、对工作产生抵触情绪</p>
            <p>• 深层原因：工作量超负荷、缺乏控制感、人际关系压力、价值感缺失</p>
            <p>• <strong>立即行动建议：</strong>主动与上级沟通工作负荷、评估工作优先级、建立工作边界</p>
          </div>
        </div>
        ` : workScore >= 2.0 ? `
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">💼 工作场景中等压力</h4>
          <p class="text-yellow-800 leading-relaxed">您的工作压力评分为<strong>${workScore.toFixed(1)}</strong>，处于中等压力水平，需要适度关注。</p>
          <div class="mt-3 space-y-2 text-yellow-700">
            <p>• 可能的表现：偶尔感到工作疲惫、对某些任务缺乏动力、工作与生活平衡困难</p>
            <p>• 深层原因：工作量周期性波动、技能与要求不完全匹配、时间管理挑战</p>
            <p>• <strong>预防性建议：</strong>定期评估工作负荷、提升时间管理技能、培养工作之外的兴趣爱好</p>
          </div>
        </div>
        ` : `
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">💼 工作场景相对健康</h4>
          <p class="text-green-800 leading-relaxed">您的工作压力评分为<strong>${workScore.toFixed(1)}</strong>，表明您在工作场景中保持了较好的心理状态。</p>
          <div class="mt-3 space-y-2 text-green-700">
            <p>• 积极表现：能够较好地处理工作挑战、保持工作效率、有良好的工作节奏</p>
            <p>• 保护因素：有效的工作策略、支持性的工作环境、清晰的职业目标</p>
            <p>• <strong>维护建议：</strong>继续当前的良好做法、定期自我评估、预防性调整工作策略</p>
          </div>
        </div>
        `}

        ${relationshipScore >= 3.0 ? `
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">👥 人际关系高消耗状态</h4>
          <p class="text-red-800 leading-relaxed">您的人际关系评分为<strong>${relationshipScore.toFixed(1)}</strong>，表明社交互动正在大量消耗您的能量。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：害怕让人失望、难以拒绝他人请求、在关系中过度付出、经常感到被利用</p>
            <p>• 深层原因：缺乏健康的人际边界、过度共情、讨好型人格特质</p>
            <p>• <strong>立即行动建议：</strong>练习选择性参与社交、建立关系层次、学会表达自己的需求</p>
          </div>
        </div>
        ` : relationshipScore >= 2.0 ? `
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">👥 人际关系中等消耗</h4>
          <p class="text-yellow-800 leading-relaxed">您的人际关系评分为<strong>${relationshipScore.toFixed(1)}</strong>，处于中等水平，需要注意社交能量的管理。</p>
          <div class="mt-3 space-y-2 text-yellow-700">
            <p>• 可能的表现：在特定社交场合感到疲惫、偶尔难以平衡付出与回报、人际关系波动</p>
            <p>• 深层原因：社交技能需要提升、边界意识不够清晰、关系模式有待优化</p>
            <p>• <strong>改善建议：</strong>提升社交技巧、练习适度的自我保护、建立更健康的互动模式</p>
          </div>
        </div>
        ` : `
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">👥 人际关系相对平衡</h4>
          <p class="text-green-800 leading-relaxed">您的人际关系评分为<strong>${relationshipScore.toFixed(1)}</strong>，表明您在社交互动中保持了较好的平衡。</p>
          <div class="mt-3 space-y-2 text-green-700">
            <p>• 积极表现：能够健康地处理人际关系、有适当的边界意识、享受有质量的社交</p>
            <p>• 保护因素：良好的社交技巧、健康的人际边界、支持性的社交网络</p>
            <p>• <strong>维护建议：</strong>继续保持健康的社交模式、深化有意义的关系、定期评估人际关系质量</p>
          </div>
        </div>
        `}

        ${selfDemandScore >= 3.0 ? `
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">🎯 自我要求过度苛责</h4>
          <p class="text-red-800 leading-relaxed">您的自我要求评分为<strong>${selfDemandScore.toFixed(1)}</strong>，表明您对自己的过高标准正在持续消耗心理能量。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：完美主义、自我批评严重、害怕失败、难以放松标准</p>
            <p>• 深层原因：早期形成的条件式自我价值、社会比较压力、内在的严厉批评声音</p>
            <p>• <strong>立即行动建议：</strong>重新定义成功标准、练习自我慈悲、设定现实可达成的目标</p>
          </div>
        </div>
        ` : selfDemandScore >= 2.0 ? `
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🎯 自我要求中等水平</h4>
          <p class="text-yellow-800 leading-relaxed">您的自我要求评分为<strong>${selfDemandScore.toFixed(1)}</strong>，表明您的自我期待适中，但有时可能过度自我批评。</p>
          <div class="mt-3 space-y-2 text-yellow-700">
            <p>• 可能的表现：偶尔追求完美、在重要任务上压力较大、对自己有较高期待</p>
            <p>• 深层原因：成长过程中形成的价值观、对成功的理解、社会环境影响</p>
            <p>• <strong>平衡建议：</strong>学会区分高标准与完美主义、练习自我接纳、建立弹性思维</p>
          </div>
        </div>
        ` : `
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">🎯 自我要求相对健康</h4>
          <p class="text-green-800 leading-relaxed">您的自我要求评分为<strong>${selfDemandScore.toFixed(1)}</strong>，表明您对自己的期望是健康和现实的。</p>
          <div class="mt-3 space-y-2 text-green-700">
            <p>• 积极表现：能够设定现实的目标、从错误中学习、保持积极的自我对话</p>
            <p>• 保护因素：健康的自尊水平、良好的自我认知、弹性的思维模式</p>
            <p>• <strong>维护建议：</strong>继续保持健康的自我期待、支持性的自我对话、平衡目标与放松</p>
          </div>
        </div>
        `}
      </div>
    </div>
  `
}

// 生成深层原因挖掘
function generateRootCauseAnalysis(_primaryType: any, _sceneScores: any, _fatigueLevel: number) {
  return `
    <div class="rootcause-section border-l-4 border-green-500 bg-green-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-green-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-green-200 rounded-full mr-3"></span>
        深层原因挖掘分析
      </h3>

      <div class="space-y-6">
        <div class="bg-white p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">🌱 早期形成因素</h4>
          <div class="space-y-3 text-gray-700">
            <p>• <strong>成长环境：</strong>可能成长过程中形成了特定的行为模式，如过度承担责任、寻求认可等</p>
            <p>• <strong>教育背景：</strong>可能被教育要完美、要照顾他人、不能表达负面情绪</p>
            <p>• <strong>家庭模式：</strong>可能在家庭中承担了"情绪照顾者"或"小大人"的角色</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg border-l-4 border-green-200">
          <h4 class="font-semibold text-green-900 mb-3">⚖️ 维持机制分析</h4>
          <div class="space-y-3 text-gray-700">
            <p>• <strong>当前应对方式：</strong>通过更努力工作、加倍付出来解决问题，但这实际上加剧了疲惫</p>
            <p>• <strong>次级收益：</strong>可能短期内获得了认可或避免了冲突，但长期来看却牺牲了心理健康</p>
            <p>• <strong>为什么难以改变：</strong>这些模式已经自动化，成为您身份认同的一部分，改变需要意识努力和持续练习</p>
          </div>
        </div>
      </div>
    </div>
  `
}

// 生成分级干预策略
function generateInterventionStrategies(_fatigueLevel: number, _primaryType: any, _sceneScores: any, _recoveryLevel: string) {
  const workScore = _sceneScores.work || 0
  const relationshipScore = _sceneScores.relationship || 0
  const selfDemandScore = _sceneScores.selfDemand || 0

  // 基于疲劳等级的紧急程度和策略强度
  const getShortTermStrategies = () => {
    if (_fatigueLevel >= 3.5) {
      return `
        <div class="space-y-2">
          <h5 class="font-medium text-red-700">🚨 紧急情绪干预</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>立即暂停：</strong>停止所有非必要活动，优先处理情绪危机</li>
            <li>• <strong>安全空间：</strong>找到能够让您完全放松的物理空间</li>
            <li>• <strong>呼吸自救：</strong>4-7-8呼吸法（吸气4秒，屏息7秒，呼气8秒）</li>
            <li>• <strong>现实检验：</strong>提醒自己"这只是暂时的，我会度过这个时期"</li>
            <li>• <strong>紧急联系：</strong>立即联系可信赖的朋友或家人</li>
          </ul>
        </div>
      `
    } else if (_fatigueLevel >= 2.5) {
      return `
        <div class="space-y-2">
          <h5 class="font-medium text-orange-700">⚡ 快速情绪调节</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>3-3-3呼吸法：</strong>感到压力时立即进行，激活副交感神经的放松反应</li>
            <li>• <strong>情绪暂停术：</strong>在做出反应前问自己"这真的需要我处理吗？"</li>
            <li>• <strong>快速脱身：</strong>物理离开压力环境5-10分钟</li>
            <li>• <strong>感官转移：</strong>专注于身边的5种感官体验</li>
          </ul>
        </div>
      `
    } else {
      return `
        <div class="space-y-2">
          <h5 class="font-medium text-yellow-700">🌱 预防性情绪管理</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>深呼吸练习：</strong>每日3次，每次3分钟的深呼吸</li>
            <li>• <strong>积极暂停：</strong>感觉压力上升时，主动暂停2-3分钟</li>
            <li>• <strong>情绪标注：</strong>学会识别和命名自己的情绪状态</li>
            <li>• <strong>微型休息：</strong>每小时进行1-2分钟的伸展和放松</li>
          </ul>
        </div>
      `
    }
  }

  const getBoundaryStrategies = () => {
    const boundaryLevel = _recoveryLevel === 'high' ? '进阶' : _recoveryLevel === 'medium' ? '基础' : '入门'

    if (boundaryLevel === '进阶') {
      return `
        <div class="space-y-2">
          <h5 class="font-medium">🛡️ 进阶边界建立</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>优雅拒绝：</strong>学会用感谢+替代方案的句式拒绝请求</li>
            <li>• <strong>时间预算：</strong>为每天的重要事项分配固定时间块</li>
            <li>• <strong>能量管理：</strong>识别并保护自己的高能量时段</li>
            <li>• <strong>关系筛选：</strong>主动投入能滋养自己的关系</li>
          </ul>
        </div>
      `
    } else if (boundaryLevel === '基础') {
      return `
        <div class="space-y-2">
          <h5 class="font-medium">🎯 基础边界建立</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>渐进拒绝：</strong>从小的、不重要的请求开始练习说"不"</li>
            <li>• <strong>延迟回应：</strong>"我需要考虑一下再答复"</li>
            <li>• <strong>每日配额：</strong>设定每日拒绝配额，逐步增加</li>
            <li>• <strong>物理边界：</strong>设定工作时间和空间的明确界限</li>
          </ul>
        </div>
      `
    } else {
      return `
        <div class="space-y-2">
          <h5 class="font-medium">🌱 入门边界练习</h5>
          <ul class="space-y-1 text-sm">
            <li>• <strong>自我觉察：</strong>识别自己的底线和不可接受的行为</li>
            <li>• <strong>温和拒绝：</strong>使用"我现在不太方便"等委婉表达</li>
            <li>• <strong>寻求支持：</strong>请信任的朋友帮助练习设立边界</li>
            <li>• <strong>小步前进：</strong>每周设定一个小的边界目标</li>
          </ul>
        </div>
      `
    }
  }

  const getMediumTermStrategies = () => {
    let strategies = []

    // 根据场景得分添加针对性策略
    if (workScore >= 3.5) {
      strategies.push(`
        <h5 class="font-medium text-red-800">🔥 工作环境紧急重建</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>立即减负：</strong>申请减少30-50%的工作量</li>
          <li>• <strong>职位调整：</strong>考虑内部调动或职位重新定义</li>
          <li>• <strong>时间重新规划：</strong>严格执行工作时间和休息时间</li>
          <li>• <strong>寻求上级支持：</strong>坦诚沟通当前的工作压力状况</li>
          <li>• <strong>专业评估：</strong>考虑职业规划师的专业建议</li>
        </ul>
      `)
    } else if (workScore >= 2.5) {
      strategies.push(`
        <h5 class="font-medium text-orange-800">⚖️ 工作环境平衡重建</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>工作量协商：</strong>主动与上级沟通工作量合理性</li>
          <li>• <strong>优先级重设：</strong>重新协商工作优先级和时间节点</li>
          <li>• <strong>边界建立：</strong>设定工作时间的明确边界</li>
          <li>• <strong>效率提升：</strong>学习并应用时间管理技巧</li>
        </ul>
      `)
    } else if (workScore >= 1.5) {
      strategies.push(`
        <h5 class="font-medium text-yellow-800">📈 工作环境优化</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>流程改进：</strong>优化现有工作流程，提高效率</li>
          <li>• <strong>沟通优化：</strong>改善与同事和上级的沟通方式</li>
          <li>• <strong>技能提升：</strong>学习减少工作压力的新技能</li>
          <li>• <strong>环境改善：</strong>优化工作空间，减少干扰因素</li>
        </ul>
      `)
    }

    if (relationshipScore >= 3.5) {
      strategies.push(`
        <h5 class="font-medium text-red-800">💔 人际关系深度重建</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>关系清理：</strong>暂时远离或减少与消耗性关系的接触</li>
          <li>• <strong>设立界限：</strong>为所有重要关系设立清晰的边界</li>
          <li>• <strong>寻求治疗：</strong>考虑家庭治疗或关系治疗</li>
          <li>• <strong>支持系统：</strong>建立新的、健康的人际支持网络</li>
          <li>• <strong>自我保护：</strong>学会在关系中保护自己的情绪健康</li>
        </ul>
      `)
    } else if (relationshipScore >= 2.5) {
      strategies.push(`
        <h5 class="font-medium text-orange-800">🤝 人际关系重建</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>识别问题关系：</strong>识别和远离持续消耗您的关系</li>
          <li>• <strong>健康边界：</strong>建立健康的社交边界和距离</li>
          <li>• <strong>沟通改进：</strong>培养基于相互尊重的关系模式</li>
          <li>• <strong>真实表达：</strong>学会表达自己的真实感受和需求</li>
        </ul>
      `)
    } else if (relationshipScore >= 1.5) {
      strategies.push(`
        <h5 class="font-medium text-yellow-800">🌱 人际关系滋养</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>关系投资：</strong>主动维护和加深积极的人际关系</li>
          <li>• <strong>沟通技巧：</strong>提升倾听和表达的技巧</li>
          <li>• <strong>社交平衡：</strong>找到社交和独处的健康平衡</li>
          <li>• <strong>界限意识：</strong>培养在各种关系中的界限意识</li>
        </ul>
      `)
    }

    if (selfDemandScore >= 3.5) {
      strategies.push(`
        <h5 class="font-medium text-purple-800">🎯 自我期待重构</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>完美主义释放：</strong>接受"足够好"而不是追求完美</li>
          <li>• <strong>自我慈悲：</strong>像对待好朋友一样对待自己</li>
          <li>• <strong>价值重定义：</strong>将自我价值与成就解绑</li>
          <li>• <strong>内在认可：</strong>培养来自内部的认可和满足感</li>
          <li>• <strong>失败重塑：</strong>将失败视为学习和成长的机会</li>
        </ul>
      `)
    } else if (selfDemandScore >= 2.5) {
      strategies.push(`
        <h5 class="font-medium text-purple-700">📊 自我期待调整</h5>
        <ul class="space-y-1 text-sm">
          <li>• <strong>现实期望：</strong>设定更现实和可达成的目标</li>
          <li>• <strong>成就庆祝：</strong>学会庆祝小的成就和进步</li>
          <li>• <strong>比较停止：</strong>减少与他人比较的习惯</li>
          <li>• <strong>自我肯定：</strong>每天练习积极的自我对话</li>
        </ul>
      `)
    }

    // 根据韧性水平调整生活方式重建策略
    const lifestyleIntensity = _recoveryLevel === 'high' ? '深度' : _recoveryLevel === 'medium' ? '全面' : '基础'
    strategies.push(`
      <h5 class="font-medium text-green-800">🌿 ${lifestyleIntensity}生活方式重建</h5>
      <ul class="space-y-1 text-sm">
        ${lifestyleIntensity === '深度' ? `
        <li>• <strong>作息彻底重构：</strong>重新设计24小时作息，优先保证睡眠质量</li>
        <li>• <strong>营养全面升级：</strong>咨询营养师，制定情绪支持性饮食计划</li>
        <li>• <strong>运动系统化：</strong>建立包含有氧、力量、柔韧性的综合运动计划</li>
        <li>• <strong>社交重新设计：</strong>重新规划社交活动，确保有足够的滋养性互动</li>
        <li>• <strong>兴趣深度发展：</strong>培养能够带来深度满足感的兴趣爱好</li>
        ` : lifestyleIntensity === '全面' ? `
        <li>• <strong>作息重新设计：</strong>确保充足高质量睡眠，建立规律作息</li>
        <li>• <strong>每天独处时间：</strong>每天安排30-60分钟独处时间进行情绪恢复</li>
        <li>• <strong>承诺重新评估：</strong>重新评估和减少当前的承诺和义务</li>
        <li>• <strong>定期运动放松：</strong>建立每周3-4次的运动和放松活动习惯</li>
        <li>• <strong>营养意识提升：</strong>注意饮食对情绪的影响，做出相应调整</li>
        ` : `
        <li>• <strong>睡眠优化：</strong>优先保证7-8小时睡眠，建立睡前放松仪式</li>
        <li>• <strong>每日独处：</strong>每天安排20-30分钟独处时间</li>
        <li>• <strong>简单运动：</strong>每周2-3次轻度运动或散步</li>
        <li>• <strong>承诺减少：</strong>识别并减少不必要的承诺和义务</li>
        `}
      </ul>
    `)

    return strategies.join('')
  }

  const getLongTermStrategies = () => {
    const cognitiveDepth = _fatigueLevel >= 3 ? '深度' : _fatigueLevel >= 2 ? '全面' : '基础'

    return `
      <h5 class="font-medium">🧠 ${cognitiveDepth}认知重构核心</h5>
      <ul class="space-y-1 text-sm">
        ${cognitiveDepth === '深度' ? `
        <li>• <strong>核心信念重塑：</strong>识别并改变导致疲惫的深层核心信念</li>
        <li>• <strong>内在批评转化：</strong>将内在批评声音转化为支持性声音</li>
        <li>• <strong>创伤模式疗愈：</strong>处理可能影响当前状态的早期创伤模式</li>
        <li>• <strong>存在意义探索：</strong>重新思考人生意义和个人价值观</li>
        <li>• <strong>自我慈悲培养：</strong>深度培养无条件的自我慈悲</li>
        ` : cognitiveDepth === '全面' ? `
        <li>• <strong>自我价值重新定义：</strong>摆脱条件式自我认可，建立内在价值感</li>
        <li>• <strong>决策框架重建：</strong>建立基于内在需求和价值观的决策框架</li>
        <li>• <strong>不完美接受：</strong>学会接受自己和他人的不完美</li>
        <li>• <strong>内在支持培养：</strong>培养内在的慈悲和支持声音</li>
        ` : `
        <li>• <strong>积极认知培养：</strong>练习识别和调整消极思维模式</li>
        <li>• <strong>成就重新定义：</strong>扩展对成功和成就的定义</li>
        <li>• <strong>自我接纳提升：</strong>增加对自己的理解和接纳</li>
        <li>• <strong>内在动机发现：</strong>探索和培养真正内在的动机</li>
        `}
      </ul>

      <h5 class="font-medium">🌱 ${_recoveryLevel === 'high' ? '进阶' : _recoveryLevel === 'medium' ? '标准' : '渐进'}可持续发展模式</h5>
      <ul class="space-y-1 text-sm">
        ${_recoveryLevel === 'high' ? `
        <li>• <strong>情绪智能精通：</strong>深入学习情绪调节和心理韧性技能</li>
        <li>• <strong>人际关系精通：</strong>建立深度支持性的关系网络</li>
        <li>• <strong>生活意义创造：</strong>在工作和生活中主动创造意义感和价值感</li>
        <li>• <strong>持续成长心态：</strong>建立终身学习和成长的心态模式</li>
        <li>• <strong>贡献服务：</strong>通过服务他人获得更深层的满足感</li>
        ` : _recoveryLevel === 'medium' ? `
        <li>• <strong>定期检查系统：</strong>建立定期自我检查和情绪评估习惯</li>
        <li>• <strong>支持网络构建：</strong>形成支持性的人际关系网络</li>
        <li>• <strong>技能持续学习：</strong>持续学习情绪调节和心理韧性技能</li>
        <li>• <strong>意义价值寻求：</strong>在工作和生活中寻求意义感和价值感</li>
        ` : `
        <li>• <strong>基础觉察习惯：</strong>建立简单的日常自我检查习惯</li>
        <li>• <strong>支持关系识别：</strong>识别并维护能支持自己的重要关系</li>
        <li>• <strong>基础技能学习：</strong>学习基本的情绪管理技巧</li>
        <li>• <strong>小目标设定：</strong>设定并完成小的、有意义的目标</li>
        `}
      </ul>
    `
  }

  return `
    <div class="intervention-section border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-yellow-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-yellow-200 rounded-full mr-3"></span>
        分级干预策略
        <span class="ml-auto text-sm font-normal text-yellow-700">
          疲劳等级：${_fatigueLevel.toFixed(1)} | 韧性水平：${_recoveryLevel === 'high' ? '高' : _recoveryLevel === 'medium' ? '中' : '低'}
        </span>
      </h3>

      <div class="space-y-6">
        <!-- 短期应急策略 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">
            ${_fatigueLevel >= 3.5 ? '🚨 紧急危机干预' : _fatigueLevel >= 2.5 ? '⚡ 快速缓解策略' : '🌱 预防性策略'}（${_fatigueLevel >= 3.5 ? '立即执行' : _fatigueLevel >= 2.5 ? '立即可用' : '日常维护'}）
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            ${getShortTermStrategies()}
            ${getBoundaryStrategies()}
          </div>
        </div>

        <!-- 中期重建方案 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🔄 中期重建方案（${_fatigueLevel >= 3 ? '3-6个月' : '1-3个月'}）</h4>
          <div class="space-y-3 text-gray-700">
            ${getMediumTermStrategies()}
          </div>
        </div>

        <!-- 长期预防体系 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🛡️ 长期预防体系（6-12个月）</h4>
          <div class="space-y-3 text-gray-700">
            ${getLongTermStrategies()}
          </div>
        </div>
      </div>
    </div>
  `
}

// 生成个性化行动方案
function generateActionPlan(_fatigueLevel: number, _primaryType: any, _sceneScores: any, _personalTags: string[], _recoveryLevel: string) {
  const workScore = _sceneScores.work || 0
  const relationshipScore = _sceneScores.relationship || 0
  const selfDemandScore = _sceneScores.selfDemand || 0

  // 根据疲劳等级确定计划强度和重点
  const getPlanIntensity = () => {
    if (_fatigueLevel >= 3.5) {
      return {
        title: '紧急恢复计划',
        subtitle: '前30天：危机干预与基础稳定',
        weeks: 4,
        focus: '生存与危机管理',
        dailyCheck: '每日情绪危机评估（1-10分）'
      }
    } else if (_fatigueLevel >= 2.5) {
      return {
        title: '强化恢复计划',
        subtitle: '前30天：深度修复与重建',
        weeks: 4,
        focus: '修复与重建',
        dailyCheck: '每日情绪状态和应对效果评估'
      }
    } else {
      return {
        title: '预防优化计划',
        subtitle: '前30天：习惯养成与强化',
        weeks: 4,
        focus: '预防与优化',
        dailyCheck: '每日情绪健康和压力水平记录'
      }
    }
  }

  // 个性化周目标设定
  const getWeeklyGoals = () => {
    let goals = []

    if (_fatigueLevel >= 3.5) {
      // 危机级别目标
      goals = [
        {
          week: 1,
          title: '危机干预周',
          goals: [
            `睡眠底线：保证${_recoveryLevel === 'low' ? '6-7' : '7-8'}小时基础睡眠`,
            '情绪安全：建立每日情绪安全检查',
            '边界保护：暂停所有非必要的承诺和义务',
            '支持激活：联系至少2个可信赖的支持者'
          ]
        },
        {
          week: 2,
          title: '基础稳定周',
          goals: [
            '作息规律：建立固定的睡眠和起床时间',
            '情绪觉察：练习识别和命名情绪状态',
            '基础运动：每天10-15分钟温和散步',
            '营养支持：确保每日三餐规律饮食'
          ]
        },
        {
          week: 3,
          title: '能量恢复周',
          goals: [
            '独处时间：每天安排30-45分钟完全独处',
            '放松技术：学习2-3种放松技巧',
            '兴趣恢复：重新接触一个能带来小愉悦的活动',
            '社交筛选：减少与消耗性关系的接触'
          ]
        },
        {
          week: 4,
          title: '功能重建周',
          goals: [
            '轻度责任：承担1-2个简单的日常责任',
            '计划制定：制定简单的下周计划',
            '成就感体验：完成1个小目标并庆祝',
            '专业咨询：预约第一次专业咨询（如果需要）'
          ]
        }
      ]
    } else if (_fatigueLevel >= 2.5) {
      // 修复级别目标
      goals = [
        {
          week: 1,
          title: '评估与准备周',
          goals: [
            `睡眠目标：每晚${_recoveryLevel === 'low' ? '7-8' : '8-9'}小时高质量睡眠`,
            '边界练习：每周练习拒绝3-4个不合理请求',
            '独处时间：每天安排30-45分钟独处恢复时间',
            '运动习惯：开始每周3次轻度运动或散步'
          ]
        },
        {
          week: 2,
          title: '习惯建立周',
          goals: [
            '情绪日记：开始记录每日情绪状态和触发因素',
            '正念练习：每天10分钟正念冥想或呼吸练习',
            '营养优化：注意饮食对情绪的影响，做出调整',
            '社交平衡：评估并调整社交活动频率'
          ]
        },
        {
          week: 3,
          title: '技能发展周',
          goals: [
            '沟通技巧：练习表达自己的感受和需求',
            '时间管理：学习并应用基本的时间管理技巧',
            '压力识别：识别主要的压力源和应对策略',
            '自我慈悲：练习对待自己的慈悲和理解'
          ]
        },
        {
          week: 4,
          title: '整合强化周',
          goals: [
            '综合应用：整合前几周学到的技能',
            '预防意识：识别可能的压力触发情况',
            '支持系统：建立和维护支持性的人际关系',
            '长期规划：思考并设定未来1-3个月的目标'
          ]
        }
      ]
    } else {
      // 预防级别目标
      goals = [
        {
          week: 1,
          title: '觉察增强周',
          goals: [
            `睡眠优化：保持${_recoveryLevel === 'high' ? '7-8' : '8-9'}小时规律睡眠`,
            '情绪觉察：提高对日常情绪变化的敏感度',
            '能量管理：识别并保护高能量时段',
            '预防练习：每周练习预防性放松2-3次'
          ]
        },
        {
          week: 2,
          title: '边界强化周',
          goals: [
            '边界练习：在各种关系中练习设立健康边界',
            '主动拒绝：主动识别和拒绝不合理的要求',
            '时间保护：保护和 prioritizing 重要时间',
            '关系投资：投入时间和精力于滋养性关系'
          ]
        },
        {
          week: 3,
          title: '技能精进周',
          goals: [
            '高级放松：学习更高级的放松和冥想技巧',
            '压力转化：将压力转化为成长动力的技巧',
            '意义寻找：探索和深化生活的意义和目的',
            '韧性建设：有意锻炼心理韧性和抗压能力'
          ]
        },
        {
          week: 4,
          title: '平衡发展周',
          goals: [
            '工作生活平衡：优化工作与生活的平衡',
            '兴趣发展：培养能带来深层满足感的兴趣',
            '社会贡献：考虑如何为社会做出有意义的贡献',
            '持续成长：建立终身学习和成长的 mindset'
          ]
        }
      ]
    }

    // 根据场景得分添加针对性调整
    if (workScore >= 3.0) {
      goals.forEach(week => {
        week.goals.push(`工作减负：逐步减少工作负担和压力`)
      })
    }
    if (relationshipScore >= 3.0) {
      goals.forEach(week => {
        week.goals.push(`关系修复：每周投入时间修复健康关系`)
      })
    }
    if (selfDemandScore >= 3.0) {
      goals.forEach(week => {
        week.goals.push(`期望调整：每周练习调整自我期待`)
      })
    }

    return goals
  }

  // 个性化专业资源推荐
  const getPersonalizedResources = () => {
    let resources: {
      books: string[],
      tools: string[],
      apps: string[],
      professional: string[]
    } = {
      books: [],
      tools: [],
      apps: [],
      professional: []
    }

    // 基于主要疲惫类型的书籍推荐
    const typeBasedBooks: { [key: string]: string[] } = {
      '过度付出型': [
        '《不完美的礼物》- Brené Brown',
        '《自我慈悲》- Kristin Neff',
        '《过劳》- Anna Katharina Schaffner'
      ],
      '高压消耗型': [
        '《压力管理》- Hans Selye',
        '《为什么我们这么累》- Hans-Peter Hagemeyer',
        '《减压生活》- 哈佛医学院'
      ],
      '情感耗竭型': [
        '《情绪的语言》- Brene Brown',
        '《情绪急救》- Guy Winch',
        '《情绪疗愈》- Karla McLaren'
      ],
      '意义缺失型': [
        '《活出生命的意义》- Viktor Frankl',
        '《第二座山》- David Brooks',
        '《心流》- Mihaly Csikszentmihalyi'
      ]
    }

    // 获取当前类型的书籍
    const currentTypeBooks = typeBasedBooks[_primaryType?.type] || []

    // 基于疲劳等级的资源推荐
    if (_fatigueLevel >= 3.5) {
      resources.books = [
        '《情绪耗竭：识别与预防》- Herbert Freudenberger',
        '《身体从未忘记》- Bessel van der Kolk',
        '《创伤与复原》- Judith Herman',
        ...currentTypeBooks
      ]
      resources.tools = [
        '危机干预热线电话保存',
        '紧急联系人清单制定',
        '情绪危机应对卡片',
        '安全空间创建指南'
      ]
      resources.professional = [
        '心理治疗师一对一咨询',
        '精神科医生评估',
        '危机干预热线',
        '心理健康支持小组'
      ]
    } else if (_fatigueLevel >= 2.5) {
      resources.books = [
        '《过劳与自我照顾》- Christina Maslach',
        '《复原力》- Andrew Shatté',
        '《内在工程》- Sadhguru',
        ...currentTypeBooks
      ]
      resources.tools = [
        '情绪日记模板',
        '正念冥想引导音频',
        '压力评估量表',
        '时间管理工具'
      ]
      resources.professional = [
        '心理咨询师会谈',
        '生活教练指导',
        '工作坊和培训课程',
        '同伴支持小组'
      ]
    } else {
      resources.books = [
        '《习惯的力量》- Charles Duhigg',
        '《原子习惯》- James Clear',
        '《心流》- Mihaly Csikszentmihalyi',
        ...currentTypeBooks
      ]
      resources.tools = [
        '目标设定工作表',
        '习惯追踪器',
        '冥想和正念App',
        '时间块规划工具'
      ]
      resources.professional = [
        '个人发展教练',
        '职业规划咨询',
        '技能培训课程',
        '兴趣工作坊'
      ]
    }

    // 基于韧性水平的App推荐
    if (_recoveryLevel === 'low') {
      resources.apps = [
        'Calm - 深度冥想和睡眠辅助',
        'Headspace - 正念冥想入门指导',
        'Insight Timer - 冥想社区和引导',
        'Talkspace - 在线心理咨询'
      ]
    } else if (_recoveryLevel === 'medium') {
      resources.apps = [
        'Waking Up - 高级正念练习',
        'Ten Percent Happier - 实用冥想技巧',
        'Moodpath - 心理健康追踪',
        'Daylio - 情绪日记'
      ]
    } else {
      resources.apps = [
        'Streaks - 习惯追踪',
        'Forest - 专注时间管理',
        'Notion - 生活和工作管理',
        'Audible - 有声书学习平台'
      ]
    }

    return resources
  }

  // 个性化何时寻求专业帮助的标准
  const getProfessionalHelpCriteria = () => {
    const baseCriteria = [
      '持续的情绪低落或焦虑超过2周',
      '睡眠问题严重影响日常生活',
      '工作或人际关系明显恶化',
      '身体症状持续不减'
    ]

    if (_fatigueLevel >= 3.5) {
      return [
        ...baseCriteria,
        '出现自我伤害或自杀的想法',
        '无法完成基本日常生活任务',
        '与现实脱节或出现幻觉',
        ' substance use to cope with emotions'
      ]
    } else if (_fatigueLevel >= 2.5) {
      return [
        ...baseCriteria,
        '感到绝望和无助',
        '社交隔离和孤独感严重',
        '身体症状反复出现',
        '应对策略完全失效'
      ]
    } else {
      return [
        '情绪波动影响生活质量',
        '重要关系出现持续问题',
        '职业发展受到阻碍',
        '个人成长停滞不前'
      ]
    }
  }

  const planIntensity = getPlanIntensity()
  const weeklyGoals = getWeeklyGoals()
  const resources = getPersonalizedResources()
  const helpCriteria = getProfessionalHelpCriteria()

  return `
    <div class="actionplan-section border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-indigo-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-indigo-200 rounded-full mr-3"></span>
        个性化行动方案
        <span class="ml-auto text-sm font-normal text-indigo-700">
          ${planIntensity.title} | 疲劳等级：${_fatigueLevel.toFixed(1)}
        </span>
      </h3>

      <div class="space-y-6">
        <!-- ${planIntensity.subtitle} -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-200">
          <h4 class="font-semibold text-indigo-900 mb-3">📅 ${planIntensity.subtitle}</h4>
          <div class="space-y-4 text-gray-700">
            <div class="bg-indigo-50 p-3 rounded-lg">
              <p class="text-indigo-800 text-sm font-medium">🎯 核心焦点：${planIntensity.focus}</p>
            </div>

            ${weeklyGoals.map(week => `
            <div class="border-l-4 border-indigo-100 pl-4">
              <h5 class="font-medium text-indigo-800 mb-2">${week.week}：${week.title}</h5>
              <ul class="space-y-1 text-sm text-gray-600">
                ${week.goals.map(goal => `<li>• ${goal}</li>`).join('')}
              </ul>
            </div>
            `).join('')}

            <div class="mt-4 p-3 bg-gray-50 rounded-lg">
              <h5 class="font-medium mb-2">📝 ${planIntensity.dailyCheck}</h5>
              <p class="text-sm text-gray-600">
                每天晚上花5-10分钟记录今天的情绪状态、主要挑战、成功应对的地方，以及明天可以改进的地方。
                这有助于增强自我觉察能力，及早发现潜在问题。
              </p>
            </div>

            ${_fatigueLevel >= 3.0 ? `
            <div class="mt-4 p-3 bg-red-50 rounded-lg border-l-4 border-red-200">
              <h5 class="font-medium text-red-800 mb-2">🚨 紧急预案</h5>
              <ul class="space-y-1 text-sm text-red-700">
                <li>• 识别可能的情绪触发情况，提前准备应对策略</li>
                <li>• 建立"安全网"：当情绪危机时联系的人员名单</li>
                <li>• 准备情绪急救工具包：舒缓音乐、芳香疗法、安抚物品</li>
                <li>• 设定明确的"求助信号"和寻求帮助的条件</li>
              </ul>
            </div>
            ` : `
            <div class="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-200">
              <h5 class="font-medium text-yellow-800 mb-2">⚡ 预防预案</h5>
              <p class="text-sm text-yellow-700">
                识别可能的压力触发情况，提前准备应对策略，避免陷入被动的情绪反应模式。
                建立自我检查机制，定期评估预防措施的有效性。
              </p>
            </div>
            `}
          </div>
        </div>

        <!-- 个性化专业资源推荐 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-200">
          <h4 class="font-semibold text-indigo-900 mb-3">📚 为您定制的专业资源</h4>
          <div class="space-y-4 text-gray-700">
            <div>
              <h5 class="font-medium mb-2">📖 针对性书籍推荐</h5>
              <ul class="space-y-1 text-sm">
                ${resources.books.map(book => `<li>• ${book}</li>`).join('')}
              </ul>
            </div>

            <div>
              <h5 class="font-medium mb-2">🛠️ 实用工具和练习</h5>
              <ul class="space-y-1 text-sm">
                ${resources.tools.map(tool => `<li>• ${tool}</li>`).join('')}
              </ul>
            </div>

            <div>
              <h5 class="font-medium mb-2">📱 推荐应用程序</h5>
              <ul class="space-y-1 text-sm">
                ${resources.apps.map(app => `<li>• ${app}</li>`).join('')}
              </ul>
            </div>

            <div>
              <h5 class="font-medium mb-2">👨‍⚕️ 专业支持资源</h5>
              <ul class="space-y-1 text-sm">
                ${resources.professional.map(prof => `<li>• ${prof}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- 何时寻求专业帮助 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-orange-200">
          <h4 class="font-semibold text-orange-900 mb-3">⚠️ 何时寻求专业帮助</h4>
          <div class="space-y-3">
            <div class="bg-orange-50 p-3 rounded border-l-4 border-orange-200">
              <p class="text-orange-800 text-sm font-medium">
                ${_fatigueLevel >= 3.5 ? '🚨 立即寻求帮助：' : _fatigueLevel >= 2.5 ? '⚡ 考虑寻求帮助：' : '💡 建议寻求帮助：'}
              </p>
              <p class="text-orange-700 text-sm mt-1">出现以下任一情况时</p>
            </div>
            <ul class="space-y-1 text-sm text-orange-700">
              ${helpCriteria.map(criteria => `<li>• ${criteria}</li>`).join('')}
            </ul>
            ${_fatigueLevel >= 3.5 ? `
            <div class="mt-3 p-2 bg-red-100 rounded text-red-800 text-sm">
              <strong>紧急联系方式：</strong>如果您处于严重困境中，请立即拨打心理援助热线或前往最近的医院急诊科。
            </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `
}

// 生成专业评估与建议
function generateProfessionalAssessment(_fatigueLevel: number, _recoveryLevel: string, _sceneScores: any) {
  const riskLevel = _fatigueLevel >= 3 ? '高风险' : _fatigueLevel >= 2 ? '中等风险' : '低风险'
  const recoveryScore = _recoveryLevel === 'high' ? 8 : _recoveryLevel === 'medium' ? 5 : 2

  return `
    <div class="assessment-section border-l-4 border-red-500 bg-red-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-red-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-red-200 rounded-full mr-3"></span>
        专业评估与后续建议
      </h3>

      <div class="space-y-6">
        <!-- 风险评估 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">⚠️ 综合风险评估</h4>
          <div class="space-y-3 text-gray-700">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div class="text-center">
                <p class="font-medium">心理健康风险</p>
                <p class="text-2xl font-bold ${riskLevel === '高风险' ? 'text-red-600' : riskLevel === '中等风险' ? 'text-orange-600' : 'text-green-600'}">${riskLevel}</p>
              </div>

              <div class="text-center">
                <p class="font-medium">功能影响程度</p>
                <p class="text-2xl font-bold text-orange-600">${_fatigueLevel >= 3 ? '严重' : _fatigueLevel >= 2 ? '中等' : '轻度'}</p>
              </div>

              <div class="text-center">
                <p class="font-medium">紧急程度</p>
                <p class="text-2xl font-bold ${_fatigueLevel >= 3 ? 'text-red-600' : _fatigueLevel >= 2 ? 'text-orange-600' : 'text-yellow-600'}">${_fatigueLevel >= 3 ? '高' : _fatigueLevel >= 2 ? '中' : '低'}</p>
              </div>
            </div>

            ${_fatigueLevel >= 2 ? `
            <div class="mt-4 p-3 bg-red-100 rounded-lg">
              <p class="text-red-800"><strong>⚡ 重要提醒：</strong>您当前的疲惫状态已经对日常生活产生实质性影响，建议认真考虑寻求专业的心理健康支持。</p>
            </div>
            ` : ''}
          </div>
        </div>

        <!-- 康复前景分析 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">📈 康复前景分析</h4>
          <div class="space-y-3 text-gray-700">
            <p><strong>心理韧性评分：</strong>${recoveryScore}/10 分</p>
            <p><strong>预计恢复时间：</strong>${_recoveryLevel === 'high' ? '3-6个月' : _recoveryLevel === 'medium' ? '6-12个月' : '12-18个月'}</p>
            <p><strong>成功关键因素：</strong>持续的自我觉察、有效的应对策略、支持性的人际环境、专业帮助的及时介入。</p>

            <p><strong>潜在障碍：</strong>${_recoveryLevel === 'low' ? '心理韧性不足，抗压能力较弱' : '当前应对策略效果递减，需要新的模式'}</p>
          </div>
        </div>

        <!-- 跟踪建议 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">📊 后续跟踪建议</h4>
          <div class="space-y-3 text-gray-700">
            <h5 class="font-medium">每周评估指标</h5>
            <ul class="space-y-1 text-sm">
              <li>• 整体情绪状态（1-10分评估）</li>
              <li>• 睡眠质量和时长</li>
              <li>• 工作压力感知程度</li>
              <li>• 社交活动后的能量水平</li>
              <li>• 身体症状变化</li>
            </ul>

            <h5 class="font-medium">每月深入回顾</h5>
            <ul class="space-y-1 text-sm">
              <li>• 识别情绪模式和触发因素的规律</li>
              <li>• 评估应对策略的有效性</li>
              <li>• 调整行动方案和目标</li>
              <li>• 必要时寻求专业咨询调整方案</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
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

/* 题目切换过渡动画 */
.question-slide-enter-active,
.question-slide-leave-active {
  transition: all 0.4s ease-out;
}

.question-slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.question-slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.question-slide-enter-to,
.question-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* 为固定导航留出空间 */
@media (min-width: 768px) {
  .h-32 {
    height: 8rem; /* 在桌面端给更多空间 */
  }
}
</style>
