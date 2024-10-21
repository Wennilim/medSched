import { serverApi } from "@/utils/axios";

export const getDoctorByCategoryApi = (category: string) =>
	serverApi
		.get(`doctors?filters[Categories][Name][$in]=${category}&populate=*`, undefined)
		.then((res) => res.data);
