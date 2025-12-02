<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full text-center">
      <div class="card p-8">
        <h1 class="text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">页面未找到</h2>
        <p class="text-gray-600 mb-8">
          抱歉，您访问的页面不存在。
        </p>
        <button
          @click="goHome"
          class="btn btn-primary"
        >
          返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>