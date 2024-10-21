/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getCategoryApi } from '@/utils/api/getCategoryApi';
import { baseURL } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom';


export const CategorySearch = () => {

    const getCategoryQuery = useQuery({
        queryKey: ['getCategories'],
        queryFn: () => getCategoryApi(),
        enabled: true,
        staleTime: 0,
    });

    return (
        <div className='flex flex-col items-center mb-10 gap-4 px-5'>
            <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-logo'>Doctors</span></h2>
            <h2 className='text-xl text-gray-400'>Search your Doctor and Book an Appointment with your finger tips</h2>
            <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
                <Input className='w-full text-xl px-3 py-2 border border-gray-300 rounded-xl' type="text" placeholder=" Search..." />
                <Button className='bg-logo hover:bg-hover text-white p-3 rounded-xl flex gap-1' type="submit"><Search className='w-4 h-4 mr-2 self-center' />Search</Button>
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center items-center my-8 gap-2'>
                {getCategoryQuery?.data?.data?.length > 0 ? getCategoryQuery?.data?.data?.map((item: any, index: number) => (index < 6 &&
                    <Link to={`/search/${item.Name.toLowerCase()}`} onClick={() => window.scrollTo(0, 0)} key={item.id} className='flex flex-col items-center p-5 m-2 bg-heroBg  rounded-xl shadow-lg hover:scale-110 transition-all ease-in-out cursor-pointer'>
                        <img src={`${baseURL}${item.Icon.url}`} alt={item.Name} className='w-12 h-12 flex self-center rounded-xl' />
                        <span className='text-font text-sm font-semibold'>{item.Name}</span>
                    </Link>
                )) :
                    [1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className='h-[108px] w-[130px] bg-slate-200 rounded-xl animate-pulse' />
                    ))
                }
            </div>

        </div >
    )
}
