/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


interface AxiosRequestConfigWithMeta extends AxiosRequestConfig<any> {
	meta?: any;
}

export const baseURL = 'http://localhost:1337';

const serverAxiosParams = {
    baseURL:`${baseURL}/api`,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`, 
      },
};

export const serverAxiosInstance = axios.create(serverAxiosParams);


const api = (axiosInstance: AxiosInstance) => {
	return {
		get: (url: string, config: AxiosRequestConfigWithMeta | undefined) =>
			axiosInstance.get(url, config),
		delete: (url: string, config: AxiosRequestConfigWithMeta | undefined) =>
			axiosInstance.delete(url, config),
		post: (url: string, body: any, config: AxiosRequestConfigWithMeta | undefined) =>
			axiosInstance.post(url, body, config),
		put: (url: string, body: any, config: AxiosRequestConfigWithMeta | undefined) =>
			axiosInstance.put(url, body, config),
		patch: (url: string, body: any, config: AxiosRequestConfigWithMeta | undefined) =>
			axiosInstance.patch(url, body, config),
	};
};

export const serverApi = api(serverAxiosInstance);
