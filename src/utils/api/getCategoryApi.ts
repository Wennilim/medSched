import { serverApi } from "@/utils/axios";

export const getCategoryApi = () =>
	serverApi
		.get('categories?populate=*', undefined)
		.then((res) => res.data);
