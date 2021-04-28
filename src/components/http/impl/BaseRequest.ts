import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IRequest, Response } from '../IRequest';
import { EventEmitter } from 'components/event/EventEmitter';
import { HttpEvent } from 'components/event/HttpEvent';


export class BaseRequest implements IRequest {


    private static DEFAULT_TIMEOUT = 30 * 1000;



    /* 创建axios实例 */
    private request: AxiosInstance = axios.create({
        responseType: 'json',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
    });


    /**
    * GET请求,获取一个流
    * @param url 
    */
    async requestBlobForGet<T>(url: string, progressBlock?: (progress: number) => void): Promise<ArrayBuffer> {
        return new Promise((resolove) => {
            const res = this.request.get(url, {
                responseType: 'arraybuffer',
                headers: {
                    'Accept': '*/*'
                },
                onDownloadProgress: function (progressEvent: ProgressEvent) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    if (progressBlock) {
                        progressBlock(percentCompleted);
                    }
                }
            });


            res.then((value: AxiosResponse) => {
                const contentType: string = value.headers['content-type'];
                if (contentType == 'application/json') {
                    resolove(null);
                    return;
                }
                resolove(value.data);
            }).catch((err: any) => {
                resolove(null);
            });
        });
    }

    /**
     * GET请求
     * @param url 
     */
    async requestForGet<T>(url: string): Promise<Response> {
        return new Promise((resolove) => {
            const res = this.request.get(url, { timeout: BaseRequest.DEFAULT_TIMEOUT });
            res.then((value: AxiosResponse) => {
                resolove(this.statusSuccessResponse(value));
            }).catch((err: any) => {
                resolove(this.errorResponse(err));
            });
        });
    }

    /**
     * POST 请求
     * @param url POST URL
     * @param data 
     */
    async requestForPost<T>(url: string, data: any): Promise<Response> {
        return new Promise((resolove) => {
            const res = this.request.post(url, data, { timeout: BaseRequest.DEFAULT_TIMEOUT });
            res.then((value: AxiosResponse) => {
                resolove(this.statusSuccessResponse(value));
            }).catch((err: any) => {
                resolove(this.errorResponse(err));
            });
        });
    }

    async requestForFormPost<T>(url: string, data: Map<string, any>, auth?: any): Promise<Response> {

        return new Promise((resolove) => {
            let param = new FormData();
            data.forEach((value, key) => {
                param.append(key, value);
            });
            const res = this.request.post(url, param, {
                timeout: BaseRequest.DEFAULT_TIMEOUT, auth: auth
            });
            res.then((value: AxiosResponse) => {
                resolove(this.statusSuccessResponse(value));
            }).catch((err: any) => {
                resolove(this.errorResponse(err));
            });
        });
    }

    public async requestPutForMultipart<T>(url: string, params: Map<string, any>, progressBlock?: (progress: number) => void): Promise<Response> {
        return new Promise((resolove) => {
            const formData = new FormData();

            params.forEach((value: any, key: string) => {
                formData.append(key, value);
            });
            const config = {
                headers: { "Content-Type": "multipart/form-data;boundary=" + new Date().getTime() },
                onUploadProgress: function (progressEvent: ProgressEvent) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    if (progressBlock) {
                        progressBlock(percentCompleted);
                    }
                }
            };
            const res = this.request.put(url, formData, config);
            res.then((value: AxiosResponse) => {
                resolove(this.statusSuccessResponse(value));
            }).catch((err: any) => {
                console.error('upload', err);
                resolove(this.errorResponse(err));
            });
        });
    }


    async uploadFile<T>(url: string, file: File, progressBlock?: (progress: number) => void): Promise<Response> {
        return new Promise((resolove) => {
            const formData = new FormData();
            formData.append("file", file);
            const config = {
                headers: { "Content-Type": "multipart/form-data;boundary=" + new Date().getTime() },
                onUploadProgress: function (progressEvent: ProgressEvent) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    if (progressBlock) {
                        progressBlock(percentCompleted);
                    }
                }
            };
            const res = this.request.post(url, formData, config);
            res.then((value: AxiosResponse) => {
                resolove(this.statusSuccessResponse(value));
            }).catch((err: any) => {
                console.error('upload', err);
                resolove(this.errorResponse(err));
            });
        });
    }



    /**
    * PUT 请求
    * @param url 
    * @param data 
    */
    async requestForPut<T>(url: string, data: any): Promise<Response> {
        return new Promise((resolove) => {
            const res = this.request.put(url, data, { timeout: BaseRequest.DEFAULT_TIMEOUT });
            res.then((value: AxiosResponse) => {
                resolove(this.statusSuccessResponse(value));
            }).catch((err: any) => {
                resolove(this.errorResponse(err));
            });
        });
    }

    /**
    * Patch 请求
    * @param url 
    * @param data 
    */
   async requestForPatch<T>(url: string, data: any): Promise<Response> {
    return new Promise((resolove) => {
        const res = this.request.patch(url, data, { timeout: BaseRequest.DEFAULT_TIMEOUT });
        res.then((value: AxiosResponse) => {
            resolove(this.statusSuccessResponse(value));
        }).catch((err: any) => {
            resolove(this.errorResponse(err));
        });
    });
}

    /**
    * DELETE 请求
    * @param url 
    */
    async requestForDelete<T>(url: string): Promise<Response> {
        return new Promise((resolove) => {
            const res = this.request.delete(url, { timeout: BaseRequest.DEFAULT_TIMEOUT });
            res.then((value: AxiosResponse) => {
                resolove(this.statusSuccessResponse(value));
            }).catch((err: any) => {
                resolove(this.errorResponse(err));
            });
        });
    }

    private errorResponse<T>(err: any): Response {
        const response: Response = new Response(-1,null,err)

   
        if(!err.response){
            EventEmitter.dispatch(HttpEvent.HTTP_AUTH_401_REJECT);
        }

        if ((err.response) && err.response.status == 401) {
            EventEmitter.dispatch(HttpEvent.HTTP_AUTH_401_REJECT);
        }
        return response;
    }


    private statusSuccessResponse<T>(value: AxiosResponse<any>): Response {
        const response: Response = new Response(value.status,value.data,null)
        if (value.status == 401) {
            EventEmitter.dispatch(HttpEvent.HTTP_AUTH_401_REJECT);
        }
        return response;
    }

}



