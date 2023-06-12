
import AsyncStorage from '@react-native-async-storage/async-storage';
import { msg } from 'react-native-tools-next';

import CONFIG from '@/config/index';
import CACHE from '@/config/cache'
import dayjs from 'dayjs';

let { LOGIN_DATA } = CACHE
let { HTTP_TIME_OUT, BFF_HOST, AUTHORIZATION } = CONFIG

declare const window: { [k: string]: any }

interface IFetchReq {
  method?: string;
  body?: string;
  contentType?: string;
  mode?: string;
  headers?: Object;
}

/**
 * 封装公共的fetch服务
 */
const Fetch = (url: string, req: IFetchReq, host = BFF_HOST): any => {
  //默认参数
  let request = {
    method: 'GET',
    headers: {
      terminal: 'APP',
      Accept: 'application/json',
      'Content-Type':
        url.indexOf('uploadResource') > 0
          ? 'multipart/form-data'
          : 'application/json',
      Authorization: AUTHORIZATION + window.token || '',
    }
  };

  //header合并
  if (req && req.headers) {
    const mergeHeader = { ...request.headers, ...req.headers };
    request.headers = mergeHeader;
    delete req.headers;
  }

  const merge = { ...request, ...req }

  url = host + url;

  let start = 0;

  if (__DEV__) {
    console.log('请求->', url, '\n', JSON.stringify(merge, null, 2));
    start = dayjs().valueOf();
  }

  return new Promise((resolve, reject) => {
    let isServerOk = true;

    //超时优化
    let httpTimeout = setTimeout(() => {
      const err = {
        code: 'S-000002',
        message: '网络超时'
      };
      resolve(err);
    }, 1000 * HTTP_TIME_OUT);

    // @ts-ignore
    fetch(url, merge)
      .then((res) => {
        // 限流 - 跳转限流页面
        if (res.status == 429) {
          // 登录弹窗-限流
          msg.emit('loginModal:toggleVisible', {
            visible: false,
            callBack: null,
          });
          msg.emit('router: goToNext', {
            routeName: 'Sentinel',
          });
        }

        //清除网络超时
        clearTimeout(httpTimeout);
        //判断server是不是异常状态404，500等
        isServerOk = !!(res.status >= 200 && res.status < 300);
        //promise
        return res.json();
      })
      .then((res) => {
        if (isServerOk) {
          if (__DEV__) {
            let time = dayjs().valueOf() - start;
            console.info(`${url} --> 响应时间 : ${time} ms`);
            console.log('返回结果---->', res);
          }
          // TODO 弹窗提示错误的code值
          if ([
            'K-050419',
            'K-050420',
            'K-050421',
            'K-050422',
            'K-050423',
            'K-050424',
            'K-050425',
            'K-050426',
            'K-050427',
            'K-050428',
            'K-050430',
            'K-050431',
          ].includes(res.code)) {
            msg.emit('app:tip', res.message);
          }
          //数据正确返回
          resolve(res);
        } else {
          if (__DEV__) {
            console.info('响应->', url, res.code, '\n', res);
          }
          if (res.code == 'K-000015') {
            //token过期或者校验错误,将token清除
            AsyncStorage.removeItem(LOGIN_DATA);
            window.token = '';
          } else {
            if (res.code === 'K-000001') {
              // 系统异常隐藏
              msg.emit('app:tip', '您的网络不给力:(');
            } else {
              msg.emit('app:tip', res.message);
            }
            if (__DEV__) {
              console.log(res.message);
              throw new Error(res.message);
            }
          }
          reject(res);
        }
      })
      .catch(() => {
        //清除网络超时
        clearTimeout(httpTimeout);
        resolve({
          code: 'K-000001',
          message: '网络错误'
        });
      })
  });
};


export interface AsyncResult<T> {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context: T;
  /**
   * 消息内容
   */
  message: string;
}

interface IFetch {
  host: string;
  url: string;
}

async function Common<T = object>(params: IFetch & { data?: Object, method?: string }): Promise<AsyncResult<T>> {
  let { host, url, data, method } = params;
  return await Fetch(url, {
    body: data
      ? JSON.stringify({
        ...data
      })
      : undefined,
    method,
    mode: 'cors'
  }, host);
}

function fetchx<T = object>(params: IFetch & { method?: string, data?: Object }): Promise<AsyncResult<T>> {
  return Common<T>(params);
}

let host = BFF_HOST;
export function get<T = any>(url: string, option = { host }) {
  //TODO 把当前的权限 记录下来.
  return fetchx<T>({
    host: option.host,
    url,
    method: 'get'
  });
}

export function patch<T = any>(url: string, option = { host }) {
  //TODO 把当前的权限 记录下来.
  return fetchx<T>({
    host: option.host,
    url,
    method: 'patch'
  });
}

export function head<T = any>(url: string, option = { host }) {
  //TODO 把当前的权限 记录下来.
  return fetchx<T>({
    host: option.host,
    url,
    method: 'head'
  });
}

export function put<T = any>(url: string, data?: Object, option = { host }) {
  return fetchx<T>({
    host: option.host,
    url,
    method: 'put',
    data
  });
}

export function post<T = any>(url: string, data?: Object, option = { host }) {
  return fetchx<T>({
    host: option.host,
    url,
    method: 'post',
    data
  });
}

export function options<T = any>(url: string, data?: Object, option = { host }) {
  return fetchx<T>({
    host: option.host,
    url,
    method: 'options',
    data
  });
}

export function deleteF<T = any>(url: string, data?: Object, option = { host }) {
  return fetchx<T>({
    host: option.host,
    url,
    method: 'delete',
    data
  });
}
