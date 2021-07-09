import { http } from "@/services/request"

export function refreshToken(params) {
  return http().post('user/refresh/token', params)
}