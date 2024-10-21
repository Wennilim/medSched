import { serverApi } from "@/utils/axios";

export const getDoctorListApi = () =>
	serverApi
		.get('doctors?populate=*', undefined)
		.then((res) => res.data);
