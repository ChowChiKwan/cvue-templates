/**
 * 消息提示
 * @param type
 * @param message
 * @param duration
 * @returns {*}
 */
import { Message } from 'element-ui';

export const message = (type, msg, duration = 1500 ) => {
  return Message({
    type,
    message: msg,
    duration,
  });
};

/**
 * 获取 url 参数
 * @param name
 * @returns {*}
 */
export const getUrlParam = (name) => {
  const reg = new RegExp(`(.*)${name}=([^&]*)(&|$)`);
  const result = window.location.href.match(reg);
  if (result !== null && result.toString().length) {
    return decodeURIComponent(result[2]);
  }
  return null;
};

/**
 * 读取 cookie
 * @param name
 * @returns {*}
 */
export const getCookie = (name) => {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const cookie = document.cookie.match(reg);
  if (cookie) {
    return encodeURIComponent(cookie[2]);
  }
  return null;
};

/**
 * 设置 cookie
 * @param name
 * @param value
 * @param domain
 * @param path
 */
export const setCookie = (name, value, domain, path = '/') => {
  document.cookie = `${name}=${value}; domain=${domain}; path=${path}`;
};
