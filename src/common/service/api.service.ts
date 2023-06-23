import axios, { type AxiosResponse } from 'axios'

import { API_DI_CONFIG } from '../../constants/api-id.constant'
import { PROPERTY_CONFIG } from '@/config/property.config'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? PROPERTY_CONFIG.DEV_SERVER_PATH
    : PROPERTY_CONFIG.PRO_SERVER_PATH

const Axios = axios.create({
  baseURL,
  timeout: 20000 // 设置超时时长
})

/**
 * Description placeholder
 * @async
 * @param {string} apiIds
 * @param {*} param
 * @param {?boolean} [isShowLoading]
 * @param {?boolean} [isHideLoading]
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getApi = async (
  apiIds: string,
  param: any,
  isShowLoading?: boolean,
  isHideLoading?: boolean
): Promise<AxiosResponse<any, any>> => {
  const request = {
    url: API_DI_CONFIG[apiIds].endpoint,
    method: API_DI_CONFIG[apiIds].method,
    data: param,
    headers: {
      isShowLoading,
      isHideLoading
    }
  }

  // 发起请求为前端异步 操作 async/await
  const response = await Axios(request)

  return response
}
