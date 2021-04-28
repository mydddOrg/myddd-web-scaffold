export class Response<T = any> {
    status: number;
    data?: T;
    statusText?: string;
    error?: any

    constructor(status: number,data?: T,error?:any){
        this.status = status
        this.data = data
        this.error = error
    }
    
    public resultSuccess():boolean {
        return this.status >= 200 && this.status <=299
    }
}

export abstract class IRequest {

    /**
     * GET请求,获取一个流
     * @param url 
     */
    abstract requestBlobForGet(url: string,progressBlock?: (progress: number) => void): Promise<ArrayBuffer>;



    /**
     * GET请求
     * @param url 
     */
    abstract requestForGet<T = any>(url: string): Promise<Response<T>>;

    /**
     * POST 请求
     * @param url POST URL
     * @param data 
     */
    abstract requestForPost<T = any>(url: string, data: any): Promise<Response<T>>;

    /**
    * PUT 请求
    * @param url 
    * @param data 
    */
    abstract requestForPut<T = any>(url: string, data: any): Promise<Response<T>>;

    /**
    * PATCH 请求
    * @param url 
    * @param data 
    */
   abstract requestForPatch<T = any>(url: string, data: any): Promise<Response<T>>;

    /**
    * DELETE 请求
    * @param url 
    */
    abstract requestForDelete<T = any>(url: string): Promise<Response<T>>;

    /**
     * 上传文件
     * @param url 
     * @param file 
     */
    abstract uploadFile<T>(url: string, file: File, progressBlock?: (progress: number) => void): Promise<Response>;

    abstract requestPutForMultipart<T>(url: string, params:Map<string,any>, progressBlock?: (progress: number) => void): Promise<Response>;

    abstract requestForFormPost<T>(url: string, data: Map<string, any>,auth?:any): Promise<Response>
}