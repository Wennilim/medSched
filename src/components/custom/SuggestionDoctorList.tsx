/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDoctorListApi } from "@/utils/api/getDoctorListApi";
import { baseURL } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const SuggestionDoctorList = () => {
    const id = useParams()
    const getDoctorListQuery = useQuery({
        queryKey: ['getDotorsList'],
        queryFn: () => getDoctorListApi(),
        enabled: true,
        staleTime: 0,
    });

    const doctorList = getDoctorListQuery?.data?.data;
    const filteredDoctorList = doctorList?.filter((item: any) => item?.documentId !== id.id);

    return (
        <div>
            <h2 className="mb-3 font-bold text-3xl">Suggestion</h2>
            <div className="border-[1px] border-gray-200  p-5 rounded-xl">
                {filteredDoctorList?.filter((item: any) => item?.documentId !== id.id)?.map((item: any, index: number) => (
                    <a href={`/detail/${item?.documentId}`}>
                        <div key={item?.id} className="flex items-center gap-4 mb-2 hover:bg-categoryList p-2 rounded-xl">
                            <img
                                src={`${baseURL}/${item?.image?.url}`}
                                alt={item?.Name}
                                className='rounded-full w-14 h-14 flex items-center justify-center object-cover'
                            />
                            <div className="flex flex-col items-baseline">
                                <h2 className='text-[10px] bg-heroBg p-1 rounded-full px-2 text-font mb-1'>{item?.Categories?.Name}</h2>
                                <h2 className='font-bold text-lg'>{item?.Name}</h2>
                                <h2 className='flex gap-2 text-gray-500 text-sm'>
                                    <span className="text-logo font-semibold">{item?.Year_of_Experience} Years</span>
                                </h2>
                            </div>
                        </div>

                        {index < filteredDoctorList?.length - 1 && <hr className="border-[1px] border-categoryList shadow-xl mb-8" />}
                    </a>


                ))}
            </div>

        </div>
    )
}
