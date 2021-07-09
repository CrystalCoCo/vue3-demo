import { http } from "@/services/request"

export function getArticleList(params) {
  console.log(http, 22222222222222)
  return http().get('yi-website/public/byCondition', params)
}