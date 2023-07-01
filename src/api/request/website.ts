import request from '../request';
import {AxiosResponse} from "axios"; // 假设这是你的封装文件的名字
//网站website

interface Website {
    id:number
    url?: string;
    name?: string;
}

//list
export function api_website_list(): Promise<AxiosResponse> {
    return request.get('/website/list');
}


// add
/**
 * {
 *     url
 *     name
 * }
 * */
export function api_website_website(data: Website): Promise<AxiosResponse> {
    return request.post('/website/add', data);
}

// edit
/**
 * {
 *     id
 *     url
 *     name
 * }
 * */
export function api_website_edit(data: Website): Promise<AxiosResponse> {
    return request.put('/website/update', data);
}


//delete
/**
 * {
 *     id
 * }
 * */
export function api_website_delete(data: number): Promise<AxiosResponse> {
    return request.delete('/website/delete?id='+data);
}

