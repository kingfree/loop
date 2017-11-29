import { delCookie, getCookie } from './helper'
import { DOMAIN, JWT_NAME } from './config'

export function redirectLogin () {
  localStorage.clear()
  window.location.href = '/'
}

export function authenticated () {
  const sso_token = getCookie(JWT_NAME)
  if (!sso_token) {
    redirectLogin()
  }
}

export function logOut () {
  delCookie({
    name: JWT_NAME,
    path: '/',
    domain: DOMAIN
  })
  authenticated()
}