import api from './api'

export interface RequestParams {
	url : string;
	data ?: object | string | ArrayBuffer;
	header ?: object;
	method ?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
	timeout ?: number;
	dataType ?: string;
}

export interface ResponseData<T = any> {
	data : T;
	statusCode : number;
	header : object;
	errMsg : string;
}

export const request = <T>(params : RequestParams) : Promise<ResponseData<T>> => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: api.baseUrl + params.url,
			data: params.data,
			header: params.header,
			method: params.method || "GET",
			timeout: params.timeout || 60000,
			dataType: params.dataType || 'json',
			success: (res) => {
				if (res.statusCode >= 200 && res.statusCode < 300) {
					resolve(res as unknown as ResponseData<T>);
				} else {
					reject(new Error(`Request failed with status code ${res.statusCode}`));
				}
			},
			fail: (err) => {
				reject(err);
			}
		});
	});
};