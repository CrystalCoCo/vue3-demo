import { getArticleList } from '@/api/home'
import { ref, onMounted } from "vue"
export default function useGetTableList() {
  const list = ref([])
  const getTableList = async() => {
    const { data } = await getArticleList({ flag: 'knowledge', pageSize: 8 })
    list.value = data.list
  }

  //onMounted(getTableList)
  onMounted(() => {
    getTableList()
  })

  return {
    list,
    getTableList
  }
}