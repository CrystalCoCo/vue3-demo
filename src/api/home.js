import { http } from "@/services/request"

export function getArticleList(params) {
  return http().get('/public/article', params)
}