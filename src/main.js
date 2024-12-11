import { createApp } from 'vue'
import App from './App.vue'
import BaceIcon from '@/components/BaseIcon.vue'

const app = createApp(App)
app.component('BaseIcon', BaceIcon).component('BaseIcon', BaceIcon)
// グローバルで扱うことができる
//こんな感じでコンポーネントを登録することができる
//グローバル登録よりもローカル登録の方が優先される
//かなり頻繁に使うときのみグローバル登録を使う
app.mount('#app')
