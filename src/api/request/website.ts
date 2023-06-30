import request from '../request';
import {AxiosResponse} from "axios"; // 假设这是你的封装文件的名字
//网站website

//list
export function api_website_list(): Promise<AxiosResponse> {
    return request.get('/website/list');
}



// 定义一个User接口，表示用户的数据结构
interface User {
    id: number;
    name: string;
}
