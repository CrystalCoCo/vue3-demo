<template>
  <a-config-provider :locale="locale">   
    <router-view/>
    <a-spin :spinning="spinning"/>
  </a-config-provider>
</template>

<script>
  import { useStore} from 'vuex'
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
      let spinning = computed(() => store.state.spinning) 
      return {
        spinning
      }
    }
  }
</script>

