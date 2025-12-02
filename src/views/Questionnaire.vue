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

// 根据测试结果生成深度个性化报告内容
const generateReportContent = (testResult: any) => {
  const fatigueLevel = testResult.fatigueLevel || 1
  const primaryType = testResult.primaryType
  const secondaryType = testResult.secondaryType
  const sceneScores = testResult.sceneScores || {}
  const recoveryLevel = testResult.recoveryLevel || 'medium'
  const personalTags = testResult.personalTags || []

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
          <p class="mb-3"><strong>测评时间：</strong>${new Date().toLocaleDateString()} | 用时：${testResult.duration ? Math.round(testResult.duration / 60) + '分钟' : '未知'}</p>
          <p class="text-lg"><strong>核心诊断：</strong>${getFatigueLevelLabel(fatigueLevel)}</p>
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

// 疲惫等级标签
const getFatigueLevelLabel = (level: number): string => {
  const labels = {
    0: '0级 · 情绪稳定区（安全状态）',
    1: '1级 · 轻度情绪疲劳（预警信号）',
    2: '2级 · 中度情绪耗竭（需要调整）',
    3: '3级 · 重度情绪透支（急需干预）',
    4: '4级 · 极度情绪崩溃（危险状态）'
  }
  return labels[level] || labels[1]
}

// 生成深度心理洞察
function generatePsychologicalInsight(fatigueLevel: number, primaryType: any, sceneScores: any, personalTags: string[]) {
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

        ${personalTags.length > 0 ? `
        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
          <h4 class="font-semibold text-purple-900 mb-2">🏷️ 个性化特征标签</h4>
          <div class="flex flex-wrap gap-2">
            ${personalTags.map(tag => `<span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">${tag}</span>`).join('')}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `
}

// 生成行为模式深度解读
function generateBehaviorAnalysis(primaryType: any, sceneScores: any, recoveryLevel: string) {
  return `
    <div class="behavior-section border-l-4 border-blue-500 bg-blue-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-blue-200 rounded-full mr-3"></span>
        行为模式深度解读
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  `
}

// 生成具体场景分析
function generateScenarioAnalysis(sceneScores: any, fatigueLevel: number) {
  const workScore = sceneScores.work || 0
  const relationshipScore = sceneScores.relationship || 0
  const selfDemandScore = sceneScores.selfDemand || 0

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
        ` : ''}

        ${relationshipScore >= 3.0 ? `
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">👥 人际关系高消耗状态</h4>
          <p class="text-red-800 leading-relaxed">您的人际关系评分为<strong>${relationshipScore.toFixed(1)}</strong>，表明社交互动正在大量消耗您的能量。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：害怕让人失望、难以拒绝他人请求、在关系中过度付出、经常感到被利用</p>
            <p>• 深层原因：缺乏健康的人际边界、过度共情、讨好型人格特质</p>
            <p>• <strong>立即行动建议：</strong>练习选择性参与社交、建立关系层次、学会表达自己的需求</p>
          </div>
        ` : ''}

        ${selfDemandScore >= 3.0 ? `
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
          <h4 class="font-semibold text-red-900 mb-3">🎯 自我要求过度苛责</h4>
          <p class="text-red-800 leading-relaxed">您的自我要求评分为<strong>${selfDemandScore.toFixed(1)}</strong>，表明您对自己的过高标准正在持续消耗心理能量。</p>
          <div class="mt-3 space-y-2 text-red-700">
            <p>• 可能的表现：完美主义、自我批评严重、害怕失败、难以放松标准</p>
            <p>• 深层原因：早期形成的条件式自我价值、社会比较压力、内在的严厉批评声音</p>
            <p>• <strong>立即行动建议：</strong>重新定义成功标准、练习自我慈悲、设定现实可达成的目标</p>
          </div>
        ` : ''}
      </div>
    </div>
  `
}

// 生成深层原因挖掘
function generateRootCauseAnalysis(primaryType: any, sceneScores: any, fatigueLevel: number) {
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
function generateInterventionStrategies(fatigueLevel: number, primaryType: any, sceneScores: any, recoveryLevel: string) {
  const workScore = sceneScores.work || 0
  const relationshipScore = sceneScores.relationship || 0
  const selfDemandScore = sceneScores.selfDemand || 0

  return `
    <div class="intervention-section border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-yellow-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-yellow-200 rounded-full mr-3"></span>
        分级干预策略
      </h3>

      <div class="space-y-6">
        <!-- 短期应急策略 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🚨 短期应急策略（立即可用）</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div class="space-y-2">
              <h5 class="font-medium">情绪急救技术</h5>
              <ul class="space-y-1 text-sm">
                <li>• <strong>3-3-3呼吸法：</strong>感到压力时立即进行，激活副交感神经的放松反应</li>
                <li>• <strong>情绪暂停术：</strong>在做出反应前问自己"这真的需要我处理吗？"</li>
                <li>• <strong>快速脱身：</strong>物理离开压力环境5-10分钟</li>
              </ul>
            </div>

            <div class="space-y-2">
              <h5 class="font-medium">边界建立技巧</h5>
              <ul class="space-y-1 text-sm">
                <li>• 练习说"不"，从小事情开始</li>
                <li>• 延迟回应："我需要考虑一下再答复"</li>
                <li>• 设定每日拒绝配额</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 中期重建方案 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🔄 中期重建方案（1-3个月）</h4>
          <div class="space-y-3 text-gray-700">
            ${workScore >= 3.0 ? `
            <h5 class="font-medium text-orange-800">工作环境重建</h5>
            <ul class="space-y-1 text-sm">
              <li>• 主动与上级沟通工作量合理性</li>
              <li>• 重新协商工作优先级和时间节点</li>
              <li>• 建立工作时间的明确边界</li>
              <li>• 寻求工作调动的可能性</li>
            </ul>
            ` : ''}

            ${relationshipScore >= 3.0 ? `
            <h5 class="font-medium text-red-800">人际关系重建</h5>
            <ul class="space-y-1 text-sm">
              <li>• 识别和远离持续消耗您的关系</li>
              <li>• 建立健康的社交边界和距离</li>
              <li>• 培养基于相互尊重的关系模式</li>
              <li>• 学会表达自己的真实感受和需求</li>
            </ul>
            ` : ''}

            <h5 class="font-medium">生活方式重建</h5>
            <ul class="space-y-1 text-sm">
              <li>• 重新设计日常作息，确保充足高质量睡眠</li>
              <li>• 每天安排独处时间进行情绪恢复</li>
              <li>• 重新评估和减少当前的承诺和义务</li>
              <li>• 建立定期的运动和放松活动</li>
            </ul>
          </div>
        </div>

        <!-- 长期预防体系 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
          <h4 class="font-semibold text-yellow-900 mb-3">🛡️ 长期预防体系（3-6个月）</h4>
          <div class="space-y-3 text-gray-700">
            <h5 class="font-medium">认知重构核心</h5>
            <ul class="space-y-1 text-sm">
              <li>• 重新定义自我价值，摆脱条件式自我认可</li>
              <li>• 建立基于内在需求的决策框架</li>
              <li>• 学会接受不完美和不完整</li>
              <li>• 培养自我慈悲和内在支持声音</li>
            </ul>

            <h5 class="font-medium">可持续发展模式</h5>
            <ul class="space-y-1 text-sm">
              <li>• 建立定期自我检查和情绪评估习惯</li>
              <li>• 形成支持性的人际关系网络</li>
              <li>• 持续学习情绪调节和心理韧性技能</li>
              <li>• 在工作和生活中寻求意义感和价值感</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
}

// 生成个性化行动方案
function generateActionPlan(fatigueLevel: number, primaryType: any, sceneScores: any, personalTags: string[], recoveryLevel: string) {
  return `
    <div class="actionplan-section border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-xl mb-6">
      <h3 class="text-xl font-bold text-indigo-900 mb-4 flex items-center">
        <span class="w-2 h-2 bg-indigo-200 rounded-full mr-3"></span>
        个性化行动方案
      </h3>

      <div class="space-y-6">
        <!-- 30天行动计划 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-200">
          <h4 class="font-semibold text-indigo-900 mb-3">📅 第一个月：稳定化计划</h4>
          <div class="space-y-3 text-gray-700">
            <h5 class="font-medium">每周目标设定</h5>
            <ul class="space-y-2 text-sm">
              <li>• <strong>睡眠目标：</strong>每晚7-8小时高质量睡眠，固定睡眠时间</li>
              <li>• <strong>边界练习：</strong>每周练习拒绝2-3个不合理请求</li>
              <li>• <strong>独处时间：</strong>每天安排30分钟独处时间</li>
              <li>• <strong>运动放松：</strong>每周3次轻度运动或放松活动</li>
            </ul>

            <h5 class="font-medium">每日自我检查</h5>
            <p class="text-sm">每天晚上记录：今天的情绪状态、触发因素、应对方式、改善空间。这有助于增强自我觉察能力。</p>

            <h5 class="font-medium">紧急预案</h5>
            <p class="text-sm">识别可能的压力触发情况，提前准备应对策略，避免陷入被动的情绪反应模式。</p>
          </div>
        </div>

        <!-- 专业资源推荐 -->
        <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-200">
          <h4 class="font-semibold text-indigo-900 mb-3">📚 专业资源推荐</h4>
          <div class="space-y-3 text-gray-700">
            <h5 class="font-medium">书籍推荐</h5>
            <ul class="space-y-1 text-sm">
              <li>• 《情绪耗竭：如何识别和预防》- Herbert Freudenberger</li>
              <li>• 《过劳与自我照顾》- Christina Maslach</li>
              <li>• 《不完美的礼物》- Brené Brown</li>
            </ul>

            <h5 class="font-medium">实用工具和练习</h5>
            <ul class="space-y-1 text-sm">
              <li>• <strong>情绪日记：</strong>记录情绪触发和反应模式</li>
              <li>• <strong>正念冥想：</strong>每天10分钟，培养觉察和接纳</li>
              <li>• <strong>身体扫描：</strong>定期检查身体紧张部位，主动放松</li>
              <li>• <strong>支持小组：</strong>寻找有相似经历的人分享经验</li>
            </ul>

            <h5 class="font-medium">何时寻求专业帮助</h5>
            <div class="bg-orange-50 p-3 rounded border-l-4 border-orange-200 mt-3">
              <p class="text-orange-800 text-sm"><strong>立即寻求帮助：</strong>出现以下任一情况时</p>
              <ul class="space-y-1 text-orange-700 text-sm mt-2">
                <li>• 持续的情绪低落超过2周</li>
                <li>• 严重的睡眠问题或身体症状</li>
                <li>• 工作或人际关系严重受损</li>
                <li>• 出现自我伤害的想法或冲动</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

// 生成专业评估与建议
function generateProfessionalAssessment(fatigueLevel: number, recoveryLevel: string, sceneScores: any) {
  const riskLevel = fatigueLevel >= 3 ? '高风险' : fatigueLevel >= 2 ? '中等风险' : '低风险'
  const recoveryScore = recoveryLevel === 'high' ? 8 : recoveryLevel === 'medium' ? 5 : 2
  const workScore = sceneScores.work || 0
  const relationshipScore = sceneScores.relationship || 0

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
                <p class="text-2xl font-bold text-orange-600">${fatigueLevel >= 3 ? '严重' : fatigueLevel >= 2 ? '中等' : '轻度'}</p>
              </div>

              <div class="text-center">
                <p class="font-medium">紧急程度</p>
                <p class="text-2xl font-bold ${fatigueLevel >= 3 ? 'text-red-600' : fatigueLevel >= 2 ? 'text-orange-600' : 'text-yellow-600'}">${fatigueLevel >= 3 ? '高' : fatigueLevel >= 2 ? '中' : '低'}</p>
              </div>
            </div>

            ${fatigueLevel >= 2 ? `
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
            <p><strong>预计恢复时间：</strong>${recoveryLevel === 'high' ? '3-6个月' : recoveryLevel === 'medium' ? '6-12个月' : '12-18个月'}</p>
            <p><strong>成功关键因素：</strong>持续的自我觉察、有效的应对策略、支持性的人际环境、专业帮助的及时介入。</p>

            <p><strong>潜在障碍：</strong>${recoveryLevel === 'low' ? '心理韧性不足，抗压能力较弱' : '当前应对策略效果递减，需要新的模式'}</p>
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

/* 为固定导航留出空间 */
@media (min-width: 768px) {
  .h-32 {
    height: 8rem; /* 在桌面端给更多空间 */
  }
}
</style>