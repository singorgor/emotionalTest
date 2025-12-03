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

/* 疲惫类型分析新增样式 */
.type-section {
  @apply mt-4 pt-3 border-t border-gray-100;
}

.section-title {
  @apply text-sm font-semibold text-gray-800 mb-2;
}

.feature-list {
  @apply space-y-1;
}

.feature-list li {
  @apply text-xs text-gray-600 pl-4 relative;
}

.feature-list li::before {
  content: '•';
  @apply absolute left-0 text-gray-400;
}

.advice-list {
  @apply space-y-1;
}

.advice-list li {
  @apply text-xs text-gray-600 pl-4 relative;
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
  @apply text-xs font-medium text-gray-700;
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
  @apply text-xs text-gray-600 pl-4 relative;
}

.improvement-list li::before {
  content: '✓';
  @apply absolute left-0 text-green-500;
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
