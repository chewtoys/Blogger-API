/**
 * @file http相关接口
 * @module interfaces/http/interface
 */

import { HttpStatus } from "@nestjs/common";

//响应基本接口
export interface HttpResponseBase {
    statusCode: HttpStatus;
    message: string;
}

//成功响应接口
export type HttpSuccessResponse<T> = HttpResponseBase & { result: T };

//失败响应接口
export type HttpErrorResponse = HttpResponseBase & { reason: string };

//响应接口
export type HttpResponse<T> = HttpSuccessResponse<T> | HttpErrorResponse;

//分页数据
export interface PaginationData<T> {
    data?: T;
    total?: number;
}

//get请求选项接口
export interface HttpRequestOption {
    [key: string]: string;
}