<script setup>
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  console.log('activated')
})
onDeactivated(() => {
  console.log('deactivated')
})

// KeepAliveの時のライフサイクル
</script>
<template>
  <h1>動的コンポーネント</h1>
  <KeepAlive>
    <component :is="currentComp" />
  </KeepAlive>
  // KeepAliveは動的コンポーネントの状態を保持する // 動的コンポーネントと一緒に使う //
  v-showでも同じことが可能 // includeで指定したコンポーネントのみデータを保存する //
  excludeで指定したコンポーネントのデータを保存しない // maxで保存するデータの数を指定する
</template>
