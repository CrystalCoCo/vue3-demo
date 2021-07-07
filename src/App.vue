<template>
  <a-config-provider :locale="locale">   
    <router-view/>
    <a-spin />
  </a-config-provider>
</template>

<script>
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
    }
  }
</script>

