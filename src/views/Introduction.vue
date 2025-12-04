<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-12">
    <div class="max-w-3xl w-full">
      <!-- 主卡片 -->
      <div class="card p-8 md:p-12 animate-fade-in">
        <!-- 标题部分 -->
        <div class="text-center mb-8">
          <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            情绪疲惫度测试
          </h1>
          <div class="w-16 h-1 bg-primary-500 mx-auto rounded-full mb-4"></div>
          <p class="text-lg text-gray-600 text-balance leading-relaxed">
            用 3–5 分钟，看看你现在到底有多"累"
          </p>
        </div>

        <!-- 介绍内容 -->
        <div class="space-y-6 mb-8">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 class="text-lg font-semibold text-blue-900 mb-3">
              🎯 测试说明
            </h2>
            <ul class="space-y-2 text-base text-blue-800">
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span>这是一个<strong>自我觉察工具</strong>，帮助您了解当前的情绪状态</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span>测试包含<strong>40道题目</strong>，预计用时3-5分钟</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span><strong>非医疗诊断</strong>，仅为个人参考和自我探索</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span>请根据<strong>最近一段时间</strong>的真实感受回答</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span>本量表参考情绪耗竭（Emotional Exhaustion）、职业倦怠（Burnout）及主观疲劳相关研究思路编制</span>
              </li>
            </ul>
          </div>

          <div class="bg-green-50 border border-green-200 rounded-lg p-8">
            <h2 class="text-lg font-semibold text-green-900 mb-3">
              ✨ 您将获得
            </h2>
            <div class="grid md:grid-cols-2 gap-4 text-base text-green-800">
              <div class="flex items-start">
                <span class="text-green-500 mr-3 text-xl">📊</span>
                <div>
                  <strong class="font-semibold">疲惫等级评估</strong>
                  <p class="text-sm mt-1">了解您的情绪疲惫程度（0-4级）</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-3 text-xl">🎯</span>
                <div>
                  <strong class="font-semibold">疲惫来源分析</strong>
                  <p class="text-sm mt-1">识别主要的疲惫类型和原因</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-3 text-xl">🗺️</span>
                <div>
                  <strong class="font-semibold">场景掉血地图</strong>
                  <p class="text-sm mt-1">发现哪些场景最消耗您</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-3 text-xl">🔋</span>
                <div>
                  <strong class="font-semibold">心理韧性评估</strong>
                  <p class="text-sm mt-1">评估您的心理调节能力和抗压能力</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-orange-50 border border-orange-200 rounded-lg p-8">
            <h2 class="text-lg font-semibold text-orange-900 mb-3">
              📝 个性化报告
            </h2>
            <p class="text-base text-orange-800 leading-relaxed">
              完成测试后，您将获得一份<strong>高度个性化</strong>的分析报告，
              包含详细的类型解读、场景分析、心理韧性评估，以及<strong>针对性的行动建议</strong>。
            </p>
          </div>
        </div>

        <!-- 开始按钮 -->
        <div class="text-center">
          <button
            @click="startTest"
            :disabled="isLoading"
            class="btn btn-primary text-xl px-12 py-6 inline-flex items-center gap-4 min-h-[72px] text-lg"
          >
            <span v-if="!isLoading">开始测试</span>
            <span v-else class="loading-dots">准备中</span>
            <svg
              v-if="!isLoading"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <p class="text-base text-gray-500 mt-6">
            测试完全匿名，您的答案仅在本地处理
          </p>
        </div>
      </div>

      <!-- 底部信息 -->
      <div class="text-center mt-12">
        <p class="text-lg text-gray-500">
          适用于：长期处于压力环境的职场人、自由职业者、学生等
        </p>
        <p class="mt-3 text-lg text-gray-500">
          特别适合：自我评价为"很累、心累、提不起劲"的人群
        </p>
        <div class="mt-6 max-w-5xl mx-auto">
          <div class="card p-6 bg-amber-50 border-amber-200">
            <p class="text-amber-700 text-base leading-relaxed">
              <strong>重要声明：</strong>本量表用于日常自我觉察，不作为医疗或心理诊断依据。如需专业帮助，请咨询合格的心理健康专业人士。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFatigueTestStore } from '@/stores/fatigueTest'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const fatigueTestStore = useFatigueTestStore()
const router = useRouter()
const isLoading = ref(false)

const startTest = async () => {
  isLoading.value = true

  try {
    // 模拟准备时间
    await new Promise(resolve => setTimeout(resolve, 500))

    // 开始测试
    fatigueTestStore.startTest()

    // 跳转到答题页面
    router.push('/questionnaire')
  } catch (error) {
    console.error('启动测试失败:', error)
    // 可以显示错误提示
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

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
</style>