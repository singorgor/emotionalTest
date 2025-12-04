<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- 顶部标题 -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">情绪疲惫度测试结果</h1>
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
            <!-- 疲惫类型匹配度 -->
            <div class="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div class="mb-3">
                <div class="text-lg font-semibold text-blue-800 mb-1">{{ getMatchLevel(result.primaryType.matchScore).level }}</div>
                <div class="text-xs text-blue-600">{{ result.primaryType.matchScore }}% 匹配度</div>
              </div>

              <!-- 进度条 -->
              <div class="metric-progress-bar mb-3">
                <div
                  class="metric-progress-fill"
                  :class="getMatchLevel(result.primaryType.matchScore).barColor"
                  :style="{ width: result.primaryType.matchScore + '%' }"
                ></div>
              </div>

              <div class="font-medium text-blue-900">{{ result.primaryType.name }}</div>
            </div>

            <!-- 工作压力指数 -->
            <div class="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div class="mb-3">
                <div class="text-lg font-semibold text-orange-800 mb-1">{{ getWorkPressureLevel(result.sceneScores.work).level }}</div>
                <div class="text-xs text-orange-600">{{ result.sceneScores.work.toFixed(1) }}/5.0 压力指数</div>
              </div>

              <!-- 进度条 -->
              <div class="metric-progress-bar mb-3">
                <div
                  class="metric-progress-fill"
                  :class="getWorkPressureLevel(result.sceneScores.work).barColor"
                  :style="{ width: getWorkPressureLevel(result.sceneScores.work).percentage + '%' }"
                ></div>
              </div>

              <div class="font-medium text-orange-900">{{ getPressureLevel(result.sceneScores.work) }}</div>
            </div>

            <!-- 心理韧性水平 -->
            <div class="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div class="mb-3">
                <div class="text-lg font-semibold text-green-800 mb-1">{{ getResilienceLevelInfo(result.recoveryLevel).level }}</div>
                <div class="text-xs text-green-600">{{ getRecoveryScoreText(result.recoveryLevel) }} 韧性评分</div>
              </div>

              <!-- 进度条 -->
              <div class="metric-progress-bar mb-3">
                <div
                  class="metric-progress-fill"
                  :class="getResilienceLevelInfo(result.recoveryLevel).barColor"
                  :style="{ width: getResilienceLevelInfo(result.recoveryLevel).percentage + '%' }"
                ></div>
              </div>

              <div class="font-medium text-green-900">{{ result.recoveryLabel }}</div>
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

              <!-- 典型表现 -->
              <div class="type-section">
                <h5 class="section-title">🎯 典型表现</h5>
                <ul class="feature-list">
                  <li v-for="manifestation in getTypeManifestations(result.primaryType.code)" :key="manifestation">
                    {{ manifestation }}
                  </li>
                </ul>
              </div>

              <!-- 改善方向 -->
              <div class="type-section">
                <h5 class="section-title">💡 改善方向</h5>
                <ul class="advice-list">
                  <li v-for="advice in getTypeImprovementAdvice(result.primaryType.code)" :key="advice">
                    {{ advice }}
                  </li>
                </ul>
              </div>
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
                {{ getPressureAdvice(score, scene) }}
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

            <!-- 韧性指标分析 -->
            <div class="metrics-section">
              <h5 class="section-title">📊 韧性指标分析</h5>
              <div class="metrics-grid">
                <div class="metric-item">
                  <div class="metric-label">情绪调节</div>
                  <div class="metric-stars">
                    <span v-for="i in 5" :key="i"
                          class="star"
                          :class="i <= getResilienceMetrics(result.recoveryLevel).emotional ? 'filled' : ''">
                      ★
                    </span>
                  </div>
                </div>
                <div class="metric-item">
                  <div class="metric-label">恢复速度</div>
                  <div class="metric-stars">
                    <span v-for="i in 5" :key="i"
                          class="star"
                          :class="i <= getResilienceMetrics(result.recoveryLevel).recovery ? 'filled' : ''">
                      ★
                    </span>
                  </div>
                </div>
                <div class="metric-item">
                  <div class="metric-label">问题解决</div>
                  <div class="metric-stars">
                    <span v-for="i in 5" :key="i"
                          class="star"
                          :class="i <= getResilienceMetrics(result.recoveryLevel).problem_solving ? 'filled' : ''">
                      ★
                    </span>
                  </div>
                </div>
                <div class="metric-item">
                  <div class="metric-label">社会支持</div>
                  <div class="metric-stars">
                    <span v-for="i in 5" :key="i"
                          class="star"
                          :class="i <= getResilienceMetrics(result.recoveryLevel).social_support ? 'filled' : ''">
                      ★
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 提升建议 -->
            <div class="improvement-section">
              <h5 class="section-title">🚀 提升建议</h5>
              <ul class="improvement-list">
                <li v-for="suggestion in getResilienceImprovement(result.recoveryLevel)" :key="suggestion">
                  {{ suggestion }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 专业建议部分（自动显示） -->
      <div v-if="fatigueTestStore.detailedReport" class="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        <div class="professional-advice-enhanced">
          <!-- 装饰性标题区域 -->
          <div class="report-header-decoration">
            <div class="header-pattern"></div>
            <div class="header-content">
              <div class="header-icon">
                <div class="icon-ring"></div>
                <span class="icon-emoji">🧠</span>
              </div>
              <div class="header-text">
                <h3 class="report-title">深度个性化分析报告</h3>
                <p class="report-subtitle">基于您的测试结果，为您生成的专业心理评估和改善建议</p>
                <div class="header-badges">
                  <span class="badge professional">专业评估</span>
                  <span class="badge personalized">个性化定制</span>
                  <span class="badge comprehensive">全面分析</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 主要内容区域 -->
          <div class="report-main-content">
            <div class="content-wrapper">
              <!-- 左侧装饰条 -->
              <div class="left-decoration">
                <div class="decoration-dot dot-1"></div>
                <div class="decoration-dot dot-2"></div>
                <div class="decoration-dot dot-3"></div>
                <div class="decoration-line"></div>
              </div>

              <!-- 报告内容 -->
              <div class="report-content-enhanced">
                <div class="content-inner">
                  <div
                    ref="reportContentRef"
                    v-html="processReportContent(fatigueTestStore.detailedReport)"
                    class="report-text-enhanced"
                  ></div>
                </div>
              </div>

              <!-- 右侧装饰条 -->
              <div class="right-decoration">
                <div class="decoration-shape shape-1"></div>
                <div class="decoration-shape shape-2"></div>
                <div class="decoration-shape shape-3"></div>
              </div>
            </div>

            <!-- 底部装饰区域 -->
            <div class="report-footer-decoration">
              <div class="footer-pattern"></div>
              <div class="footer-content">
                <div class="footer-divider"></div>
                <p class="footer-text">
                  <span class="footer-icon">💡</span>
                  本报告基于情绪疲惫度评估体系生成，建议结合专业心理咨询师指导进行解读
                </p>
              </div>
            </div>
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
  if (seconds === null) return '未知'
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


const getPressureAdvice = (score: number, scene: string): string => {
  // 获取场景名称用于判断
  const sceneName = getSceneName(scene).toLowerCase()

  // 工作场景建议
  if (sceneName.includes('工作')) {
    if (score >= 4.0) return '立即暂停手头任务，拆解复杂工作，确保充足睡眠；必要时向领导反映工作量或寻求同事协助'
    if (score >= 3.2) return '合理安排工作优先级，为重要任务预留缓冲时间，主动与团队沟通协作分工'
    if (score >= 2.4) return '采用番茄工作法，定时休息，保持工作节奏，确保基本休息和放松'
    return '保持当前良好习惯，适当安排工作间隙的轻度运动或冥想放松'
  }

  // 家庭场景建议
  if (sceneName.includes('家庭')) {
    if (score >= 4.0) return '立即与家人沟通当前状态，合理分配家庭责任，必要时寻求亲友帮助或专业家庭咨询'
    if (score >= 3.2) return '明确家庭角色边界，学会适当说"不"，建立家庭责任分担机制'
    if (score >= 2.4) return '定期与家人沟通交流，共同制定家庭计划，合理安排家庭和个人时间'
    return '维持和谐的家庭关系，保持良好的家庭沟通习惯'
  }

  // 社交场景建议
  if (sceneName.includes('社交')) {
    if (score >= 4.0) return '减少不必要的社交活动，专注于核心社交关系，必要时寻求心理咨询师帮助'
    if (score >= 3.2) return '选择性参加社交活动，学会拒绝过度社交邀约，注重社交质量而非数量'
    if (score >= 2.4) return '平衡独处和社交时间，选择让自己舒适的社交场合，设定社交边界'
    return '保持积极的社交状态，继续维护健康的社交关系'
  }

  // 健康场景建议
  if (sceneName.includes('健康') || sceneName.includes('身体')) {
    if (score >= 4.0) return '立即就医检查身体状态，暂停高强度运动，保证充足睡眠和营养摄入'
    if (score >= 3.2) return '定期体检，合理安排运动强度和时间，保证规律作息和健康饮食'
    if (score >= 2.4) return '坚持适度运动，注意身体信号，保持健康的生活习惯'
    return '继续保持健康生活方式，关注身体状况变化'
  }

  // 财务场景建议
  if (sceneName.includes('财务') || sceneName.includes('经济')) {
    if (score >= 4.0) return '寻求专业理财师帮助，重新规划财务目标，暂时避免重大财务决策'
    if (score >= 3.2) return '制定详细预算计划，增加收入渠道，控制不必要开支'
    if (score >= 2.4) return '定期检视财务状况，合理规划支出，建立应急储蓄'
    return '保持良好理财习惯，持续关注财务健康'
  }

  // 学习场景建议
  if (sceneName.includes('学习') || sceneName.includes('成长')) {
    if (score >= 4.0) return '调整学习目标和计划，避免过度学习焦虑，寻求导师或同学的帮助指导'
    if (score >= 3.2) return '制定合理学习计划，采用高效学习方法，寻求学习伙伴支持'
    if (score >= 2.4) return '保持规律的学习节奏，注重劳逸结合，定期复习巩固'
    return '保持学习动力，持续提升专业技能'
  }

  // 默认建议（如果场景不匹配）
  if (score >= 4.0) return '立即安排短暂停顿，分析压力来源，拆解问题；必要时寻求专业支持和帮助'
  if (score >= 3.2) return '预留充足时间缓冲，明确优先级，主动寻求他人协助和建议'
  if (score >= 2.4) return '保持良好的节奏和习惯，定期进行自我检查和调整'
  return '维持当前良好状态，注重日常保养和预防'
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

// 获取疲惫类型的典型表现
const getTypeManifestations = (typeCode: string): string[] => {
  const manifestations: Record<string, string[]> = {
    'type_emotional_overload': [
      '容易被他人情绪影响，感到情绪负担重',
      '在团队中经常承担"情绪垃圾桶"角色',
      '下班后仍难以从工作压力中抽离',
      '过度共情导致个人边界模糊'
    ],
    'type_responsibility_trap': [
      '习惯性承担超出职责范围的工作',
      '难以拒绝他人的请求，害怕让他人失望',
      '凡事亲力亲为，不善于 delegating',
      '责任感过强，自我要求过高'
    ],
    'type_comparison_anxiety': [
      '频繁与他人比较，产生自我怀疑',
      '过度关注他人的成就和评价',
      '社交媒体使用后感到焦虑和不足',
      '对自己要求过高，追求完美主义'
    ],
    'type_high_pressure_mode': [
      '习惯高强度快节奏的工作生活方式',
      '难以放松，总觉得有事情需要处理',
      '长期处于"战斗或逃跑"的应激状态',
      '忽略了身体和心理的恢复需求'
    ]
  }
  return manifestations[typeCode] || ['表现出综合性的压力症状', '工作和生活平衡失调', '需要全面提升自我管理能力']
}

// 获取疲惫类型的改善建议
const getTypeImprovementAdvice = (typeCode: string): string[] => {
  const advice: Record<string, string[]> = {
    'type_emotional_overload': [
      '建立情绪边界，学会适度共情',
      '定期进行情绪释放活动（运动、冥想）',
      '培养理性思考习惯，减少情绪内耗'
    ],
    'type_responsibility_trap': [
      '学会合理拒绝，明确个人边界',
      '培养团队协作意识，合理分配任务',
      '调整完美主义倾向，接受"足够好"的标准'
    ],
    'type_comparison_anxiety': [
      '专注于个人成长，而非外在比较',
      '减少社交媒体使用时间，培养现实社交',
      '建立自我价值感，基于内在标准而非外界评价'
    ],
    'type_high_pressure_mode': [
      '刻意练习放慢节奏，培养耐心',
      '建立规律的作息和运动习惯',
      '学会识别和尊重身体的疲劳信号'
    ]
  }
  return advice[typeCode] || ['建立健康的生活节奏', '学习压力管理技巧', '培养自我关怀的习惯']
}

// 获取心理韧性指标数据
const getResilienceMetrics = (level: RecoveryLevel) => {
  const baseMetrics = {
    emotional: level === 'high' ? 4 : level === 'medium' ? 3 : 2,
    recovery: level === 'high' ? 4 : level === 'medium' ? 2 : 1,
    problem_solving: level === 'high' ? 4 : level === 'medium' ? 3 : 2,
    social_support: level === 'high' ? 3 : level === 'medium' ? 3 : 2
  }

  return baseMetrics
}

// 获取心理韧性提升建议
const getResilienceImprovement = (level: RecoveryLevel): string[] => {
  switch (level) {
    case 'low':
      return [
        '加强正念冥想训练，提升情绪觉察',
        '建立完善的社会支持网络',
        '学习专业的压力管理技巧',
        '培养健康的生活习惯'
      ]
    case 'medium':
      return [
        '深化情绪调节技能训练',
        '扩大社交支持系统',
        '定期进行自我反思和成长',
        '建立更有效的应对机制'
      ]
    case 'high':
      return [
        '继续保持现有的良好习惯',
        '学习更高级的压力管理技巧',
        '帮助他人建立心理韧性',
        '追求更高层次的心理健康'
      ]
    default:
      return [
        '关注自身心理状态变化',
        '建立基础的压力管理习惯',
        '培养积极的思维模式'
      ]
  }
}

// 疲惫匹配度等级转换
const getMatchLevel = (score: number) => {
  if (score >= 90) return { level: '高度匹配', color: 'green', textColor: 'text-green-600', barColor: 'bg-green-500' }
  if (score >= 75) return { level: '较好匹配', color: 'blue', textColor: 'text-blue-600', barColor: 'bg-blue-500' }
  if (score >= 60) return { level: '一般匹配', color: 'yellow', textColor: 'text-yellow-600', barColor: 'bg-yellow-500' }
  return { level: '匹配度低', color: 'gray', textColor: 'text-gray-600', barColor: 'bg-gray-500' }
}

// 工作压力等级转换 (基于5分制)
const getWorkPressureLevel = (score: number) => {
  if (score >= 4.0) return { level: '高压状态', color: 'red', textColor: 'text-red-600', barColor: 'bg-red-500', percentage: (score / 5) * 100 }
  if (score >= 3.0) return { level: '中等偏高', color: 'orange', textColor: 'text-orange-600', barColor: 'bg-orange-500', percentage: (score / 5) * 100 }
  if (score >= 2.0) return { level: '中等水平', color: 'yellow', textColor: 'text-yellow-600', barColor: 'bg-yellow-500', percentage: (score / 5) * 100 }
  return { level: '压力较低', color: 'green', textColor: 'text-green-600', barColor: 'bg-green-500', percentage: (score / 5) * 100 }
}

// 心理韧性等级转换 (基于10分制)
const getResilienceLevelInfo = (level: RecoveryLevel) => {
  switch (level) {
    case 'high':
      return { level: '韧性较强', textColor: 'text-green-600', barColor: 'bg-green-500', percentage: 85 }
    case 'medium':
      return { level: '韧性中等', textColor: 'text-yellow-600', barColor: 'bg-yellow-500', percentage: 65 }
    case 'low':
      return { level: '韧性较弱', textColor: 'text-red-600', barColor: 'bg-red-500', percentage: 25 }
    default:
      return { level: '韧性一般', textColor: 'text-gray-600', barColor: 'bg-gray-500', percentage: 50 }
  }
}

// 重新测试
const restartTest = () => {
  fatigueTestStore.restart()
  router.push('/')
}

// 处理报告内容，优化行为模式分析的布局
const processReportContent = (htmlContent: string): string => {
  if (!htmlContent) return ''

  try {
    // 查找"行为模式深度解读"相关内容并创建平行布局
    let processedHtml = htmlContent

    // 使用更可靠的正则表达式来找到"行为模式深度解读"部分
    const behaviorPatternSection = htmlContent.match(/(<h[^>]*>.*?行为模式深度解读.*?<\/h[^>]*>[\s\S]*?)(?=<h[^>]*>|$)/i)

    if (behaviorPatternSection) {
      console.log('找到行为模式深度解读部分')
      let sectionContent = behaviorPatternSection[1]

      // 查找该部分中的所有列表
      const lists = sectionContent.match(/<ul[\s\S]*?<\/ul>/gi)

      if (lists && lists.length >= 2) {
        console.log('找到列表数量:', lists.length)

        // 创建平行布局的HTML，包含响应式样式
        const parallelListsHtml = `
          <div class="behavior-pattern-grid" style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 100% !important;
            flex: 1 1 0%;
            box-sizing: border-box;
            position: relative;
          " class="responsive-grid">
            <style>
              @media (max-width: 768px) {
                .responsive-grid {
                  grid-template-columns: 1fr !important;
                  gap: 1.5rem !important;
                  margin: 1.5rem 0 !important;
                }
                .responsive-grid .behavior-cycle-card,
                .responsive-grid .cognitive-bias-card {
                  padding: 1.25rem !important;
                }
                .responsive-grid h4 {
                  font-size: 1rem !important;
                }
              }
            </style>
            <div class="behavior-cycle-card" style="
              background: linear-gradient(135deg,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(248, 250, 252, 0.9) 100%
              );
              border: 2px solid transparent;
              border-image: linear-gradient(135deg, #3b82f6, #8b5cf6) 1;
              border-radius: 16px;
              padding: 1.75rem;
              box-shadow:
                0 8px 32px rgba(59, 130, 246, 0.15),
                0 4px 16px rgba(139, 92, 246, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8);
              position: relative;
              overflow: hidden;
              width: 100%;
              box-sizing: border-box;
              min-width: 0;
              flex: 1;
            ">
              <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
                opacity: 0.8;
              "></div>
              <h4 style="
                color: #1e40af;
                font-size: 1.25rem;
                font-weight: 700;
                margin: 0 0 1.5rem 0;
                padding: 0.5rem 0;
                text-align: center;
                background: linear-gradient(135deg, #1e40af, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                position: relative;
              ">
                🔄 典型行为循环
              </h4>
              ${lists[0].replace(/<ul[^>]*>/g, '<ul style="margin: 0; padding: 0; list-style: none; width: 100%;">').replace(/<li>/g, '<li style="background: rgba(59, 130, 246, 0.05); border-left: 3px solid #3b82f6; border-radius: 8px; padding: 0.75rem 1rem; margin: 0.5rem 0; font-size: 0.875rem; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word;">')}
            </div>
            <div class="cognitive-bias-card" style="
              background: linear-gradient(135deg,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(248, 250, 252, 0.9) 100%
              );
              border: 2px solid transparent;
              border-image: linear-gradient(135deg, #ec4899, #f43f5e) 1;
              border-radius: 16px;
              padding: 1.75rem;
              box-shadow:
                0 8px 32px rgba(236, 72, 153, 0.15),
                0 4px 16px rgba(244, 63, 94, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8);
              position: relative;
              overflow: hidden;
              width: 100%;
              box-sizing: border-box;
              min-width: 0;
              flex: 1;
            ">
              <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #ec4899, #f43f5e, #ec4899);
                opacity: 0.8;
              "></div>
              <h4 style="
                color: #be185d;
                font-size: 1.25rem;
                font-weight: 700;
                margin: 0 0 1.5rem 0;
                padding: 0.5rem 0;
                text-align: center;
                background: linear-gradient(135deg, #be185d, #ec4899);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                position: relative;
              ">
                🧠 认知偏差识别
              </h4>
              ${lists[1].replace(/<ul[^>]*>/g, '<ul style="margin: 0; padding: 0; list-style: none; width: 100%;">').replace(/<li>/g, '<li style="background: rgba(236, 72, 153, 0.05); border-left: 3px solid #ec4899; border-radius: 8px; padding: 0.75rem 1rem; margin: 0.5rem 0; font-size: 0.875rem; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word;">')}
            </div>
          </div>
        `

        // 替换原有的列表部分
        const sectionStart = behaviorPatternSection.index || 0
        const sectionEnd = sectionStart + behaviorPatternSection[0].length

        const originalSection = htmlContent.substring(sectionStart, sectionEnd)
        const newSection = originalSection.replace(/<h[^>]*>.*?行为模式深度解读.*?<\/h[^>]*>[\s\S]*?(?=<h[^>]*>|$)/i,
          `$1${parallelListsHtml}`)

        processedHtml = htmlContent.substring(0, sectionStart) + newSection + htmlContent.substring(sectionEnd)
      }
    }

    return processedHtml
  } catch (error) {
    console.error('处理报告内容时出错:', error)
    return htmlContent
  }
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

/* 进度条增强样式 */
.metric-progress-bar {
  @apply w-full bg-gray-200 rounded-full h-3 overflow-hidden;
  position: relative;
}

.metric-progress-fill {
  @apply h-full rounded-full transition-all duration-700 ease-out;
  position: relative;
  overflow: hidden;
}

.metric-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* 进度条颜色增强 */
.bg-green-500 {
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
}

.bg-blue-500 {
  background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
}

.bg-orange-500 {
  background: linear-gradient(90deg, #f97316 0%, #ea580c 100%);
}

.bg-yellow-500 {
  background: linear-gradient(90deg, #eab308 0%, #ca8a04 100%);
}

.bg-red-500 {
  background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
}

.bg-gray-500 {
  background: linear-gradient(90deg, #6b7280 0%, #4b5563 100%);
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

/* 不同分析卡片的特殊背景 */
.analysis-card:nth-child(1) {
  @apply bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-blue-200;
}

.analysis-card:nth-child(2) {
  @apply bg-gradient-to-br from-orange-50 via-white to-amber-50 border-orange-200;
}

.analysis-card:nth-child(3) {
  @apply bg-gradient-to-br from-green-50 via-white to-emerald-50 border-green-200;
}

.card-header {
  @apply px-6 py-4 border-b flex items-center gap-3;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
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
  @apply text-base text-gray-700 leading-relaxed;
}

/* 疲惫类型分析新增样式 */
.type-section {
  @apply mt-4 pt-3 border-t border-gray-100;
}

.section-title {
  @apply text-base font-semibold text-gray-800 mb-2;
}

.feature-list {
  @apply space-y-1;
}

.feature-list li {
  @apply text-sm text-gray-600 pl-4 relative;
}

.feature-list li::before {
  content: '•';
  @apply absolute left-0 text-gray-400;
}

.advice-list {
  @apply space-y-1;
}

.advice-list li {
  @apply text-sm text-gray-600 pl-4 relative;
}

.advice-list li::before {
  content: '→';
  @apply absolute left-0 text-gray-400;
}

/* 场景压力分析样式 */
.scene-item {
  @apply space-y-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0;
}

.scene-header {
  @apply flex items-center justify-between;
}

.scene-name {
  @apply font-medium text-gray-800 text-base;
}

.scene-score {
  @apply flex items-center gap-2;
}

.score-text {
  @apply text-base font-medium;
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
  @apply text-sm text-gray-600 leading-relaxed;
}

/* 心理韧性评估样式 */
.recovery-result {
  @apply text-center space-y-4;
}

.recovery-badge {
  @apply inline-flex items-center px-4 py-2 rounded-full text-base font-medium;
}

.recovery-description {
  @apply text-base text-gray-700 leading-relaxed text-left;
}

/* 韧性指标样式 */
.metrics-section {
  @apply mt-4 pt-3 border-t border-gray-100;
}

.metrics-grid {
  @apply grid grid-cols-2 gap-3;
}

.metric-item {
  @apply flex items-center justify-between p-2 bg-gray-50 rounded-lg;
}

.metric-label {
  @apply text-sm font-medium text-gray-700;
}

.metric-stars {
  @apply flex gap-0.5;
}

.star {
  @apply text-xs text-gray-300;
}

.star.filled {
  @apply text-yellow-500;
}

/* 提升建议样式 */
.improvement-section {
  @apply mt-4 pt-3 border-t border-gray-100;
}

.improvement-list {
  @apply space-y-1;
}

.improvement-list li {
  @apply text-sm text-gray-600 pl-4 relative;
}

.improvement-list li::before {
  content: '✓';
  @apply absolute left-0 text-green-500;
}

/* 增强版专业建议部分样式 */
.professional-advice-enhanced {
  background: linear-gradient(145deg,
    #f0f9ff 0%,
    #e0f2fe 15%,
    #f8fafc 30%,
    #ffffff 50%,
    #faf5ff 70%,
    #f3e8ff 85%,
    #fef7ff 100%
  ) !important;
  border: 2px solid transparent !important;
  background-clip: padding-box !important;
  position: relative !important;
  border-radius: 1.25rem !important;
  overflow: hidden !important;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
}

.professional-advice-enhanced::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(59, 130, 246, 0.05) 0%,
    rgba(147, 51, 234, 0.05) 50%,
    rgba(59, 130, 246, 0.05) 100%
  );
  z-index: -1;
}

/* 装饰性标题区域 */
.report-header-decoration {
  position: relative;
  padding: 2.5rem 2rem 1.5rem;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 250, 252, 0.8) 100%
  );
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
}

.header-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg,
    #3b82f6 0%,
    #8b5cf6 25%,
    #ec4899 50%,
    #8b5cf6 75%,
    #3b82f6 100%
  );
  opacity: 0.8;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
}

.header-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
}

.icon-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.icon-emoji {
  font-size: 2rem;
  z-index: 1;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.header-text {
  flex: 1;
}

.report-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.report-subtitle {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.header-badges {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
}

.badge.professional {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  color: #1e40af;
  border: 1px solid #93c5fd;
}

.badge.personalized {
  background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
  color: #7c3aed;
  border: 1px solid #c4b5fd;
}

.badge.comprehensive {
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  color: #15803d;
  border: 1px solid #86efac;
}

/* 主要内容区域 */
.report-main-content {
  padding: 0;
}

.content-wrapper {
  display: block;
  padding: 2rem;
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* 左侧装饰条 */
.left-decoration {
  position: absolute;
  left: -2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
  z-index: 1;
  pointer-events: none;
}

.decoration-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: all 0.3s;
}

.decoration-dot.dot-1 {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
}

.decoration-dot.dot-2 {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
}

.decoration-dot.dot-3 {
  background: linear-gradient(135deg, #ec4899, #db2777);
  box-shadow: 0 0 12px rgba(236, 72, 153, 0.4);
}

.decoration-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg,
    rgba(59, 130, 246, 0.3) 0%,
    rgba(139, 92, 246, 0.3) 50%,
    rgba(236, 72, 153, 0.3) 100%
  );
  border-radius: 1px;
  min-height: 60px;
}

/* 增强的报告内容 */
.report-content-enhanced {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  position: relative;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  flex: 1 1 0%;
  overflow: hidden;
  box-sizing: border-box;
}

.report-content-enhanced::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 1rem;
  pointer-events: none;
}

.content-inner {
  position: relative;
  z-index: 1;
}

.report-text-enhanced {
  line-height: 1.7;
  color: #374151;
}

/* 右侧装饰条 */
.right-decoration {
  position: absolute;
  right: -2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  z-index: 1;
  pointer-events: none;
}

.decoration-shape {
  transition: all 0.3s;
}

.decoration-shape.shape-1 {
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: 3px;
  transform: rotate(45deg);
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
}

.decoration-shape.shape-2 {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #34d399, #10b981);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.3);
}

.decoration-shape.shape-3 {
  width: 10px;
  height: 20px;
  background: linear-gradient(135deg, #f87171, #ef4444);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(248, 113, 113, 0.3);
}

/* 底部装饰区域 */
.report-footer-decoration {
  background: linear-gradient(135deg,
    rgba(248, 250, 252, 0.9) 0%,
    rgba(241, 245, 249, 0.8) 100%
  );
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  padding: 1.5rem 2rem;
  text-align: center;
}

.footer-pattern {
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(59, 130, 246, 0.2) 20%,
    rgba(139, 92, 246, 0.2) 50%,
    rgba(59, 130, 246, 0.2) 80%,
    transparent 100%
  );
  margin-bottom: 1rem;
}

.footer-divider {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(100, 116, 139, 0.5) 50%,
    transparent 100%
  );
  margin: 0 auto 1rem;
}

.footer-text {
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.footer-icon {
  font-size: 1rem;
  opacity: 0.8;
}

/* 优化报告内容的文字样式 - 使用更强的选择器确保v-html内容样式生效 */
.report-text-enhanced :deep(h1),
.report-text-enhanced :deep(h2),
.report-text-enhanced :deep(h3),
.report-text-enhanced :deep(h4),
.report-text-enhanced :deep(h5),
.report-text-enhanced :deep(h6) {
  color: #1e293b !important;
  font-weight: 700 !important;
  margin-bottom: 1.25rem !important;
  line-height: 1.3 !important;
}

.report-text-enhanced :deep(h1) {
  font-size: 1.75rem !important;
  color: #0f172a !important;
  border-bottom: 2px solid #e2e8f0 !important;
  padding-bottom: 0.5rem !important;
}

.report-text-enhanced :deep(h2) {
  font-size: 1.5rem !important;
  color: #1e293b !important;
  border-bottom: 1px solid #e2e8f0 !important;
  padding-bottom: 0.25rem !important;
}

.report-text-enhanced :deep(h3) {
  font-size: 1.25rem !important;
  color: #334155 !important;
}

.report-text-enhanced :deep(h4) {
  font-size: 1.1rem !important;
  color: #475569 !important;
}

.report-text-enhanced :deep(h5) {
  font-size: 1rem !important;
  color: #64748b !important;
}

.report-text-enhanced :deep(h6) {
  font-size: 0.9rem !important;
  color: #64748b !important;
}

.report-text-enhanced :deep(p) {
  color: #374151 !important;
  line-height: 1.7 !important;
  margin-bottom: 1.25rem !important;
  text-align: justify !important;
  font-size: 1rem !important;
}

.report-text-enhanced :deep(ul),
.report-text-enhanced :deep(ol) {
  margin-bottom: 1.25rem !important;
  padding-left: 1.5rem !important;
}

.report-text-enhanced :deep(li) {
  color: #374151 !important;
  line-height: 1.7 !important;
  margin-bottom: 0.5rem !important;
  font-size: 1rem !important;
}

.report-text-enhanced :deep(strong),
.report-text-enhanced :deep(b) {
  color: #1e293b !important;
  font-weight: 600 !important;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1)) !important;
  padding: 0.125rem 0.25rem !important;
  border-radius: 0.25rem !important;
}

.report-text-enhanced :deep(blockquote) {
  border-left: 4px solid #3b82f6 !important;
  padding: 1rem 1.5rem !important;
  margin: 1.5rem 0 !important;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9) !important;
  border-radius: 0.5rem !important;
  color: #475569 !important;
  font-style: italic !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
}

.report-text-enhanced :deep(code) {
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0) !important;
  padding: 0.25rem 0.5rem !important;
  border-radius: 0.25rem !important;
  font-size: 0.875rem !important;
  color: #1e293b !important;
  border: 1px solid #cbd5e1 !important;
  font-family: 'Courier New', monospace !important;
}

.report-text-enhanced :deep(pre) {
  background: #1e293b !important;
  color: #f8fafc !important;
  padding: 1rem !important;
  border-radius: 0.5rem !important;
  overflow-x: auto !important;
  margin: 1rem 0 !important;
}

.report-text-enhanced :deep(pre code) {
  background: none !important;
  border: none !important;
  color: inherit !important;
  padding: 0 !important;
}

.report-text-enhanced :deep(hr) {
  border: none !important;
  height: 2px !important;
  background: linear-gradient(90deg, transparent, #e2e8f0, transparent) !important;
  margin: 2rem 0 !important;
}

.report-text-enhanced :deep(table) {
  width: 100% !important;
  border-collapse: collapse !important;
  margin: 1rem 0 !important;
  background: rgba(255, 255, 255, 0.8) !important;
  border-radius: 0.5rem !important;
  overflow: hidden !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
}

.report-text-enhanced :deep(th),
.report-text-enhanced :deep(td) {
  padding: 0.75rem 1rem !important;
  text-align: left !important;
  border-bottom: 1px solid #e2e8f0 !important;
}

.report-text-enhanced :deep(th) {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9) !important;
  font-weight: 600 !important;
  color: #1e293b !important;
}

.report-text-enhanced :deep(a) {
  color: #3b82f6 !important;
  text-decoration: underline !important;
  transition: color 0.2s !important;
}

.report-text-enhanced :deep(a:hover) {
  color: #1d4ed8 !important;
  text-decoration: none !important;
}

/* 行为模式分析区域的平行布局优化 - JavaScript生成结构 */
.report-text-enhanced :deep(.behavior-pattern-grid) {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 2rem !important;
  margin: 2rem 0 !important;
  align-items: start !important;
  width: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
  box-sizing: border-box !important;
  position: relative !important;
  container-type: inline-size !important;
}

.report-text-enhanced :deep(.behavior-cycle-card),
.report-text-enhanced :deep(.cognitive-bias-card) {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 250, 252, 0.8) 100%
  ) !important;
  border: 1px solid rgba(59, 130, 246, 0.1) !important;
  border-radius: 0.75rem !important;
  padding: 1.5rem !important;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
  position: relative !important;
  overflow: hidden !important;
  width: 100% !important;
  min-width: 0 !important;
  flex: 1 !important;
  box-sizing: border-box !important;
}

.report-text-enhanced :deep(.cognitive-bias-card) {
  border-color: rgba(139, 92, 246, 0.1) !important;
}

.report-text-enhanced :deep(.behavior-cycle-card h4),
.report-text-enhanced :deep(.cognitive-bias-card h4) {
  color: #1e293b !important;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  margin: 0 0 1rem 0 !important;
  padding: 0 0 0.5rem 0 !important;
  border-bottom: 1px solid #e2e8f0 !important;
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
}

.report-text-enhanced :deep(.behavior-cycle-card ul),
.report-text-enhanced :deep(.cognitive-bias-card ul) {
  margin: 0 !important;
  padding: 0 !important;
}

.report-text-enhanced :deep(.behavior-cycle-card li),
.report-text-enhanced :deep(.cognitive-bias-card li) {
  background: rgba(255, 255, 255, 0.6) !important;
  border-left: 3px solid #3b82f6 !important;
  border-radius: 0.5rem !important;
  padding: 1rem !important;
  margin: 0.75rem 0 !important;
  transition: all 0.2s ease !important;
  list-style: none !important;
  color: #374151 !important;
  font-size: 0.875rem !important;
  line-height: 1.6 !important;
}

.report-text-enhanced :deep(.cognitive-bias-card li) {
  border-left-color: #8b5cf6 !important;
}

.report-text-enhanced :deep(.behavior-cycle-card li:hover),
.report-text-enhanced :deep(.cognitive-bias-card li:hover) {
  background: rgba(255, 255, 255, 0.9) !important;
  border-left-color: #1d4ed8 !important;
  transform: translateX(2px) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
}

.report-text-enhanced :deep(.cognitive-bias-card li:hover) {
  border-left-color: #7c3aed !important;
}

.report-text-enhanced :deep(.behavior-cycle-card li strong),
.report-text-enhanced :deep(.cognitive-bias-card li strong) {
  color: #1e293b !important;
  font-weight: 600 !important;
  background: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
  display: block !important;
  margin-bottom: 0.25rem !important;
  font-size: 0.95rem !important;
}

.report-text-enhanced :deep(.behavior-cycle-card li p),
.report-text-enhanced :deep(.cognitive-bias-card li p) {
  color: #64748b !important;
  font-size: 0.875rem !important;
  line-height: 1.6 !important;
  margin: 0 !important;
  text-align: left !important;
}

/* 行为模式流程图样式 */
.report-text-enhanced :deep(.behavior-flow-diagram) {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9) !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 0.5rem !important;
  padding: 1rem !important;
  margin: 1rem 0 !important;
  text-align: center !important;
}

.report-text-enhanced :deep(.flow-step) {
  display: inline-block !important;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
  color: white !important;
  padding: 0.5rem 1rem !important;
  border-radius: 9999px !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  margin: 0.25rem !important;
}

.report-text-enhanced :deep(.flow-arrow) {
  display: inline-block !important;
  color: #94a3b8 !important;
  font-size: 1.2rem !important;
  margin: 0 0.5rem !important;
}

/* 认知偏差分类标签 */
.report-text-enhanced :deep(.bias-category) {
  display: inline-block !important;
  padding: 0.25rem 0.75rem !important;
  border-radius: 9999px !important;
  font-size: 0.75rem !important;
  font-weight: 500 !important;
  margin-right: 0.5rem !important;
  margin-bottom: 0.25rem !important;
}

.report-text-enhanced :deep(.bias-category.confirmation) {
  background: linear-gradient(135deg, #fee2e2, #fecaca) !important;
  color: #991b1b !important;
}

.report-text-enhanced :deep(.bias-category.negativity) {
  background: linear-gradient(135deg, #fef3c7, #fde68a) !important;
  color: #92400e !important;
}

.report-text-enhanced :deep(.bias-category.perfectionism) {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe) !important;
  color: #1e40af !important;
}

/* 特殊强调元素 */
.report-text-enhanced :deep(.highlight),
.report-text-enhanced :deep(.important) {
  background: linear-gradient(135deg, #fef3c7, #fde68a) !important;
  padding: 0.25rem 0.5rem !important;
  border-radius: 0.25rem !important;
  border-left: 3px solid #f59e0b !important;
  color: #92400e !important;
  font-weight: 500 !important;
}

.report-text-enhanced :deep(.warning) {
  background: linear-gradient(135deg, #fee2e2, #fecaca) !important;
  padding: 0.75rem !important;
  border-radius: 0.5rem !important;
  border-left: 4px solid #ef4444 !important;
  color: #991b1b !important;
  margin: 1rem 0 !important;
}

.report-text-enhanced :deep(.success) {
  background: linear-gradient(135deg, #dcfce7, #bbf7d0) !important;
  padding: 0.75rem !important;
  border-radius: 0.5rem !important;
  border-left: 4px solid #22c55e !important;
  color: #166534 !important;
  margin: 1rem 0 !important;
}

.report-text-enhanced :deep(.info) {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe) !important;
  padding: 0.75rem !important;
  border-radius: 0.5rem !important;
  border-left: 4px solid #3b82f6 !important;
  color: #1e40af !important;
  margin: 1rem 0 !important;
}

/* 增强版专业建议部分的响应式支持 */
@media (max-width: 1024px) {
  .analysis-card {
    min-height: 240px;
  }

  .report-header-decoration {
    padding: 2rem 1.5rem 1rem;
  }

  .header-content {
    gap: 1rem;
  }

  .header-icon {
    width: 3.5rem;
    height: 3.5rem;
  }

  .icon-emoji {
    font-size: 1.75rem;
  }

  .report-title {
    font-size: 1.5rem;
  }

  .content-wrapper {
    padding: 1.5rem;
  }

  .report-content-enhanced {
    padding: 1.5rem;
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

  /* 移动端专业建议样式 */
  .professional-advice-enhanced {
    border-radius: 1rem !important;
    margin: 0 0.5rem !important;
  }

  .report-header-decoration {
    padding: 1.5rem 1rem 1rem;
  }

  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .header-icon {
    width: 3rem;
    height: 3rem;
  }

  .icon-emoji {
    font-size: 1.5rem;
  }

  .report-title {
    font-size: 1.375rem;
  }

  .report-subtitle {
    font-size: 0.875rem;
  }

  .header-badges {
    justify-content: center;
  }

  .badge {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  .left-decoration,
  .right-decoration {
    display: none;
  }

  /* 移动端行为模式布局优化 */
  .report-text-enhanced :deep(.behavior-pattern-grid) {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
    margin: 1rem 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    flex: 1 !important;
  }

  .report-text-enhanced :deep(.behavior-cycle-card),
  .report-text-enhanced :deep(.cognitive-bias-card) {
    padding: 1.25rem !important;
    width: 100% !important;
    min-width: 0 !important;
    flex: 1 !important;
    box-sizing: border-box !important;
  }

  .report-text-enhanced :deep(.cycle-item),
  .report-text-enhanced :deep(.bias-item) {
    padding: 0.75rem !important;
    margin: 0.5rem 0 !important;
  }

  .report-content-enhanced {
    padding: 1.25rem;
    margin: 0;
    width: 100%;
  }

  .report-text-enhanced :deep(h1) {
    font-size: 1.5rem !important;
  }

  .report-text-enhanced :deep(h2) {
    font-size: 1.25rem !important;
  }

  .report-text-enhanced :deep(h3) {
    font-size: 1.125rem !important;
  }

  .report-text-enhanced :deep(p) {
    font-size: 1rem !important;
    line-height: 1.6 !important;
  }

  .report-text-enhanced :deep(ul),
  .report-text-enhanced :deep(ol) {
    padding-left: 1.25rem !important;
  }

  .report-text-enhanced :deep(li) {
    font-size: 1rem !important;
  }

  .report-footer-decoration {
    padding: 1rem 1rem;
  }

  .footer-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .professional-advice-enhanced {
    margin: 0 0.25rem !important;
    border-radius: 0.75rem !important;
  }

  .report-header-decoration {
    padding: 1rem 0.75rem 0.75rem;
  }

  .header-content {
    gap: 0.5rem;
  }

  .header-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  .icon-emoji {
    font-size: 1.25rem;
  }

  .report-title {
    font-size: 1.25rem;
  }

  .report-subtitle {
    font-size: 0.8rem;
  }

  .content-wrapper {
    padding: 0.75rem;
  }

  .report-content-enhanced {
    padding: 1rem;
  }

  .report-text-enhanced :deep(h1) {
    font-size: 1.375rem !important;
  }

  .report-text-enhanced :deep(h2) {
    font-size: 1.125rem !important;
  }

  .report-text-enhanced :deep(h3) {
    font-size: 1rem !important;
  }

  .report-text-enhanced :deep(p),
  .report-text-enhanced :deep(li) {
    font-size: 1rem !important;
  }

  .report-footer-decoration {
    padding: 0.75rem 0.75rem;
  }

  .footer-text {
    font-size: 0.75rem;
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
