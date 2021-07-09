import { http } from "@/services/request"

export function refreshToken(params) {
  return http().post('account-center/refresh/token', params)
}