import { appName } from '@/config';
/**
 * 英文单词首字母大写
 */
export const ReplaceFirstUper = (str) => {
  str = str.toLowerCase();
  return str.replace(/\b(\w)|\s(\w)/g, (m) => m.toUpperCase());
}
/**
 * 设置标题
 */
export const setTitle = (title) => {
  title = title ? `${ReplaceFirstUper(title)} - ${appName}` : appName;
  window.document.title = title;
};
