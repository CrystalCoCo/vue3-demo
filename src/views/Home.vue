<template>
  <div class="home">
    <a-button type="primary" @click="openLoading">打开</a-button>
    <a-button type="primary" @click="closeLoading">关闭</a-button>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script>
  import { Table } from 'ant-design-vue'
  import { getArticleList } from '../api/home'
  import { useStore} from 'vuex'
  import { onMounted } from '@vue/runtime-core'
  export default {
    name: 'Home',
    components: {
      ATable: Table
    },
    data() {
      return {
        dataSource: [
          {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
          },
          {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
          },
        ],

        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
        ]
      }
    },
    setup() {
      const store = useStore()
      function openLoading() {
        store.commit('loading', true)
      }
      function closeLoading() {
        store.commit('loading', false)
      }

      onMounted(async() => {
        const { data, code } = await getArticleList({ flag: 'yqdynamic', pageSize: 8 })
      })
      return {
        openLoading,
        closeLoading
      }
    }
  }
</script>
