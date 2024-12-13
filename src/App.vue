<script setup>
import { defineAsyncComponent } from 'vue'

// const CompB = defineAsyncComponent(() => import('./components/CompB.vue'))
// 初回で全てダウンロードされずに、CompB.vue が表示されるまでダウンロードされない // 初回レンダリンングスピードやパフォーマンスが上がる
// ボタンを押してからのレンダリングが遅い

const CompB = defineAsyncComponent({
  loader: () => import('./components/CompB.vue'),
  loadingComponent: {
    template: '<div>loading...</div>',
  },
  delay: 2000, //デフォルト
  errorComponent: {
    template: '<div>error...</div>',
  },
  timeout: 3000,
})

//loadingComponentは、遅いレンダリングの間に表示されるコンポーネントを指定する
//ローディング画面を入れるような時に使う
//delayはloadingComponentが表示されるまでの時間
//errorComponentは、エラーが発生した時に表示されるコンポーネントを指定する
//timeoutは、エラーが発生した時にerrorComponentが表示されるまでの時間
// era0
</script>
<template>
  <h1>Component</h1>
  <CompB />
</template>
