import axios from 'axios';
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse,InternalAxiosRequestConfig} from 'axios';

// 类型别名
type Result<T> = {
    code: number;
    message: string;
    result: T;
};

class Request {
    instance: AxiosInstance;
    baseConfig: AxiosRequestConfig = {baseURL: 'http://124.70.41.92:8081', timeout: 1000 * 5}
    // baseConfig: AxiosRequestConfig = {baseURL: 'http://localhost:8081', timeout: 1000 * 5}

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(Object.assign(this.baseConfig, config))
        // create创建一个axios实例,用assign将基础配置和传入配置合并.再创建一个新对象给axiso实例的创建函数


        // 请求拦截器
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 一般会请求拦截里面加token，用于后端的验证
                const token = localStorage.getItem("token") as string
                if(token) {
                    config.headers!.Authorization = token;
                }
                return config
            },
            (err: any) => {
                // 请求错误，这里可以用全局提示框进行提示
                return Promise.reject(err)
            },
        )

        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                // 直接返回res，当然你也可以只返回res.data
                // 系统如果有自定义code也可以在这里处理
                return res
            },
            (err: any) => {
                // 这里用来处理http常见错误，进行全局提示
                let message = "";
                switch (err.response.status) {
                    case 400:
                        message = "请求错误(400)";
                        break;
                    // case 401:
                    //     message = "未授权，请重新登录(401)";
                    //     // 这里可以做清空storage并跳转到登录页的操作
                    //     break;
                    // case 403:
                    //     message = "拒绝访问(403)";
                    //     break;
                    // case 404:
                    //     message = "请求出错(404)";
                    //     break;
                    // case 408:
                    //     message = "请求超时(408)";
                    //     break;
                    // case 500:
                    //     message = "服务器错误(500)";
                    //     break;
                    // case 501:
                    //     message = "服务未实现(501)";
                    //     break;
                    // case 502:
                    //     message = "网络错误(502)";
                    //     break;
                    // case 503:
                    //     message = "服务不可用(503)";
                    //     break;
                    // case 504:
                    //     message = "网络超时(504)";
                    //     break;
                    // case 505:
                    //     message = "HTTP版本不受支持(505)";
                    //     break;
                    default:
                        message = `连接出错(${err.response.status})!`;
                }
                // 这里错误消息可以使用全局弹框展示出来
                // 比如element plus 可以使用 ElMessage
                // ElMessage({
                //   showClose: true,
                //   message: `${message}，请检查网络或联系管理员！`,
                //   type: "error",
                // });
                // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
                return Promise.reject(err.response)
            },
        )

    }

    //定义请求方法
    public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        // Promise<AxiosRequest>表示一个返回值类型为AxiosRequest的Promise对象
        return this.instance.request(config)
        //调用刚才配置的对象
    }

    public get<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>> {
        return this.instance.get(url, config);
    }

    public post<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>> {
        return this.instance.post(url, data, config);
    }

    public put<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>> {
        return this.instance.put(url, data, config);
    }

    public delete<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>> {
        return this.instance.delete(url, config);
    }

}
// 通过Request类,实例化一个请求对象,并使用他的request方法发送不同的http请求,


export default new Request({})
