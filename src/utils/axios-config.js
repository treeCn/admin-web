import Vue from 'vue';
import axios from 'axios';
import {storageHelper} from './storage-helper';
import { prefix, iamPrefix } from 'api';
import { authToken, authMobile } from '@/config';
// 引入配置文件中关于token的常量
export function axiosConfig() {

  function isHttpUrl(input) {
    return /^https?:\/\//.test(input);
  }

  function isIamUrl(input) {
    return /^(sso|iam|iam-.*)\//.test(input);
  }

  function isPlainRequest(input) {
    return /\.(html?|xml|txt)$/.test(input);
  }

  function useOrigin(res) {
    return res.config.useOrigin;
  }

  function showResponseError (msg,duration) {
    Vue.prototype.$Notice.error({
      title: 'To deal with failure',
      desc: msg,
      duration: duration || 4.5
    })
  }
  
  function request(config) {
    // be sure each request use latest authToken && authMobile
    config.headers['X-Origin'] = 'admin-web';
    config.headers['X-Org-Id'] = '2';
    config.headers[authToken] = storageHelper.getItem(authToken, 'sea');
    config.headers[authMobile] = storageHelper.getItem(authMobile, 'sea');

    const input = config.url;
    // absolute remote url
    if (isHttpUrl(input)) config.url = input;

    // iam server
    else if (isIamUrl(input)) config.url = `${iamPrefix}${input}`;

    // current server
    else config.url = `${prefix}${input}`;

    return config;
  }

  function response(response) {
    // token失效
    if (response.data.code == 10042) {
      setTimeout(() => {
        window.location.href = '/admin-web/login';
      }, 60);
      storageHelper.removeItem(authToken, 'sea');
      storageHelper.removeItem(authMobile, 'sea');
      // return false;
      // 无权限
    } else if(response.data.code == 10046) {
      iView.Modal.error({
        title: 'Tip operasi',
        content: 'Tidak ada izin',
      });
      // return false;
    } else {
      return isPlainRequest(response.config.url) || useOrigin(response)
        ? response
        : response.data;
    }
  }

  function requestError(rejection) {
    return useOrigin(rejection)
      ? Promise.reject(rejection)
      : Promise.reject(rejection.data);
  }

  function responseError(error) {
    // eslint-disable-next-line no-console
    console.dir(error)
  }

  function getResponseError(input, unfeedback) {
    return {
      '-1': 'The server is abnormal, please contact the webmaster',
      '401': 'Your session has expired, please log in again',
      '403': 'Your permissions are restricted. Please ask your administrator for permission.',
      '404': 'Wrong parameter or request address, please check',
      '500': 'Server internal error',
    }[input] || unfeedback;
  }

  axios.defaults.timeout = 60 * 1000;
  axios.interceptors.request.use(request, requestError);
  axios.interceptors.response.use(response, responseError);
}
