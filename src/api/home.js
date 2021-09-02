import { http } from "@/services/request"

export function getArticleList(params) {
  return http().get('yi-website/public/byCondition', params)
}