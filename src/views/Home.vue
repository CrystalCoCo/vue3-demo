<template>
  <div class="home">
    <a-button type="primary" @click="openLoading">打开</a-button>
    <a-button type="primary" @click="closeLoading">关闭</a-button>
    <a-table :columns="columns" :data-source="list" :rowKey="record=>record.uuid">
    <template #action="{ record }">
      <a>{{record.status === 'PUBLISH' ? '已发布' : '未发布'}}</a>
    </template>
  </a-table>
  </div>
</template>

<script>
  import { Table } from 'ant-design-vue'
  import useGetTableList from './getTableList'
  //import { getArticleList } from '../api/home'
  import { useStore} from 'vuex'
  import { useRoute } from 'vue-router'
  import { onMounted, reactive, toRefs } from 'vue'
  const columns = [
    {
      title: '姓名',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '年龄',
      dataIndex: 'viewCount',
      key: 'viewCount',
    },
    {
      title: '住址',
      dataIndex: 'status',
      key: 'status',
      slots: { customRender: 'action' }
    },
  ]
  export default {
    name: 'Home',
    components: {
      ATable: Table
    },
    
    setup() {
      const { list, getTableList } = useGetTableList()
      const store = useStore()
      const route = useRoute()
      const state = reactive({
        type: route.query.type
      })
      function openLoading() {
        store.commit('loading', true)
      }
      function closeLoading() {
        store.commit('loading', false)
      }

      onMounted(async() => {
        // const { data, code } = await getArticleList({ flag: 'knowledge', pageSize: 8 })
        console.log(1111111111111111111111)
      })
      console.log(state, 'statestatestatestatestatestate')
      return {
        ...toRefs(state),
        openLoading,
        closeLoading,
        columns,
        list,
        getTableList
      }
    }
  }
</script>
