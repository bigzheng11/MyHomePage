import request from '../request';
import {AxiosResponse} from "axios"; // 假设这是你的封装文件的名字

// 定义一个User接口，表示用户的数据结构
interface User {
    id: number;
    name: string;
}

// 向/users端点发送一个GET请求，返回一个User数组
// export const api_user_list=
//     request.get<User[]>('/user/list')
//     .then(res => {
//         // 处理响应
//         console.log(res.data);
//     })
//     .catch(err => {
//         // 处理错误
//         console.error(err.message);
//     });

export function api_user_list(): Promise<AxiosResponse> {
    return request.get('/user/list');
}



// 定义一个LoginData接口，表示登录的数据结构
interface LoginData {
    username: string;
    password: string;
}

// 定义一个Token接口，表示登录成功后返回的令牌结构
interface Token {
    token: string;
    expires: number;
}

// 向/login端点发送一个POST请求，带一个LoginData对象，返回一个Token对象
request.post<Token>('/login', {username: 'admin', password: '123456'} as LoginData)
    .then(res => {
        // 处理响应
        console.log(res.data);
    })
    .catch(err => {
        // 处理错误
        console.error(err.message);
    });
