<template>
  <a-config-provider :locale="locale">   
    <div @click="toHome">Home</div> |
    <div @click="toAbout">About</div>
    <router-view/>
    <a-spin :spinning="spinning"/>
  </a-config-provider>
</template>

<script>
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { computed } from 'vue'
  import { ConfigProvider, Spin } from 'ant-design-vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  export default {
    components: {
      AConfigProvider: ConfigProvider,
      ASpin: Spin
    },
    data() {
      return {
        locale: zhCN
      }
    },
    setup() {
      const store = useStore()
      const router = useRouter()
      let spinning = computed(() => store.state.spinning) 

      const toHome = () => {
        router.push({ path: '/home', query: { type: 'add' }})
      }

      const toAbout = () => {
        router.push({ path: '/about', query: { type: 'edit' }})
      }
      return {
        spinning,
        toHome,
        toAbout
      }
    }
  }
</script>

