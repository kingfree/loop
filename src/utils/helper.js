// Replace Status text
import { JWT_NAME } from './config'

export function getUserStatus (status) {
  if (status === 1) {
    return { status: 'success', text: '正常' }
  } else {
    return { status: 'default', text: '禁用' }
  }
}

export function getIsAdminStatus (status) {
  if (status === 1) {
    return { status: 'success', text: '是' }
  } else {
    return { status: 'default', text: '否' }
  }
}

// Operation Cookie
export function getCookie (name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  if (arr) {
    return decodeURIComponent(arr[2])
  } else {
    return null
  }
}

export function delCookie ({ name, domain, path }) {
  if (getCookie(name)) {
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=' +
      path + '; domain=' +
      domain
  }
}

// Operation LocalStorage
export function setLocalStorage (key, vaule) {
  return localStorage.setItem(key, JSON.stringify(vaule))
}

export function getLocalStorage (key) {
  const value = JSON.parse(localStorage.getItem(key))
  return value
}

export function setToken (token) {
  localStorage.setItem(JWT_NAME, token)
}

export function getToken () {
  let sso_token = getCookie(JWT_NAME)
  if (!sso_token) sso_token = localStorage.getItem(JWT_NAME)
  return sso_token
}