import request from '../request';
import {AxiosResponse} from "axios";

export function api_logo(url:string): Promise<AxiosResponse> {
    return request.get('https://logo.clearbit.com/'+url);
}

