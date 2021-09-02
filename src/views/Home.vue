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
  import { onMounted } from '@vue/runtime-core'
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
        ]
      }
    },
    setup() {
      const { list, getTableList } = useGetTableList()
      const store = useStore()
      function openLoading() {
        store.commit('loading', true)
      }
      function closeLoading() {
        store.commit('loading', false)
      }

      onMounted(async() => {
        // const { data, code } = await getArticleList({ flag: 'knowledge', pageSize: 8 })
        
      })
      return {
        openLoading,
        closeLoading,
        columns,
        list,
        getTableList
      }
    }
  }
</script>
