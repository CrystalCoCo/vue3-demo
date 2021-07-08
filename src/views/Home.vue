<template>
  <div class="home">
    <a-button type="primary" @click="openLoading">打开</a-button>
    <a-button type="primary" @click="closeLoading">关闭</a-button>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
  <a-pagination show-size-changer v-model:current="current1" v-model:pageSize="pageSize" :total="500" @showSizeChange="onShowSizeChange" />
</template>

<script>
  import { Table, Pagination } from 'ant-design-vue'
  import { useStore} from 'vuex'
  import { computed } from 'vue'
  export default {
    name: 'Home',
    components: {
      ATable: Table,
      APagination: Pagination
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
        store.commit('openLoading')
      }
      function closeLoading() {
        store.commit('hideLoading')
      }
      return {
        openLoading,
        closeLoading
      }
    }
  }
</script>
