import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE064。
 * 待ち状況一覧掲示板照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE064RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 掲示板文言区分
   * キー必須: Y | 値必須: Y
   */
  noticeDiv: string;
}

/**
 * API ID: SH1APIOPE064。
 * 待ち状況一覧掲示板照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE064ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 掲示板
     * キー必須: Y | 値必須: N
     */
    noticeboard: string;
  };
}
