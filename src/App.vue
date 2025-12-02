<template>
  <div id="app" class="min-h-screen">
    <!-- 主要路由内容 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
// 在应用启动时恢复用户答案（如果有的话）
import { useFatigueTestStore } from '@/stores/fatigueTest'
import { onMounted } from 'vue'

const fatigueTestStore = useFatigueTestStore()

onMounted(() => {
  fatigueTestStore.restoreAnswers()
})
</script>

<style>
/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 焦点样式 */
*:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* 选择文本样式 */
::selection {
  background-color: #3b82f6;
  color: white;
}

/* 响应式图片和视频 */
img,
video {
  max-width: 100%;
  height: auto;
}

/* 禁用某些移动端默认行为 */
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 允许文本选择 */
input,
textarea,
select,
[contenteditable] {
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
</style>