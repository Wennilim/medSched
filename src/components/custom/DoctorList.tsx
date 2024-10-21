/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseURL } from '@/utils/axios';
import { Link } from 'react-router-dom';

export const DoctorList = ({ getQuery, heading = 'Popular Doctors' }: { getQuery: any, heading?: string }) => {

    return (
        <div className='mb-10 px-5'>
            <h2 className='font-bold text-xl'>{heading}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-4'>
                {getQuery?.data?.data.length > 0 ? getQuery?.data?.data?.map((item: any) => (
                    <div key={item?.id} className='border-[1px] rounded-xl p-3 flex gap-4 hover:border-font hover:shadow-sm transition-all ease-in-out'>
                        <img src={`${baseURL}${item?.image?.url}`} alt={`${item?.Name}`} className='w-26 h-32 rounded-xl' />
                        <div className='flex flex-col justify-between items-baseline w-full gap-1'>
                            <h2 className='text-[10px] bg-heroBg p-1 rounded-full px-2 text-font self-end mb-1'>{item?.Categories?.Name}</h2>
                            <h2 className='font-bold'>Dr. {item?.Name}</h2>
                            <h2 className='text-font text-sm'>{item?.Year_of_Experience} Years</h2>
                            <h2 className='text-gray-500 text-sm'>{item?.Address}</h2>
                            <Link to={`/detail/${item?.documentId}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                type='button' className='border border-logo text-font hover:bg-hover hover:text-white rounded-full p-2 px-3 w-full text-center'>Book Now</Link>
                        </div>
                    </div>

                )) :
                    [1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className='h-[220px] w-full bg-slate-200 rounded-xl animate-pulse' />
                    ))
                }
            </div>
        </div>
    )
}
