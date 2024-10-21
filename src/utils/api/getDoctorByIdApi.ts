import { serverApi } from "@/utils/axios";

export const getDoctorByIdApi = (id: string) =>
	serverApi
		.get(`doctors/${id}?populate=*`, undefined)
		.then((res) => res.data);
