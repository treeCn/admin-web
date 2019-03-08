
import Vue from 'vue';
import { authToken } from '@/config';
import { storageHelper } from '@/utils';

export const auth = (to, from, next) => {
  // 如果是要授权登录的且当前cookie中不存在用户邮箱的跳转到登录页面
  if (!to.meta.unauth && !storageHelper.getItem(authToken, 'sea')) {
    Vue.prototype.$notify({
      title: '退出提示',
      message: '登录超时',
    });
    next({ name: 'login', query: { backUrl: to.fullPath } });
  }
};
