import { BookAppointment } from '@/components/custom/BookAppointment';
import { SuggestionDoctorList } from '@/components/custom/SuggestionDoctorList';
import { socialMediaIcon } from '@/icons/socialMediaIcon';
import { getDoctorByIdApi } from '@/utils/api/getDoctorByIdApi';
import { baseURL } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';
import { GraduationCap, MapPin } from 'lucide-react';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const id = useParams()
  const getDoctorByIdQuery = useQuery({
    queryKey: ['getDotors'],
    queryFn: () => getDoctorByIdApi(id.id ?? ''),
    enabled: true,
    staleTime: 0,
  });

  const doctor = getDoctorByIdQuery?.data?.data;

  return (
    <section className='flex justify-between gap-16 w-full px-16'>
      <div className='flex flex-col gap-3 w-full xl:w-[80%]'>
        <h1 className='font-bold text-3xl'>Details</h1>
        <div className='px-16 border-[1px] border-gray-200 p-5 rounded-xl '>
          <div className='flex flex-col sm:flex-row gap-8'>
            <img
              src={`${baseURL}/${doctor?.image?.url}`}
              alt={doctor?.Name}
              className='rounded-xl h-[280px] flex items-center justify-center object-contain'
            />
            <div className='col-span-2 my-5 flex flex-col gap-3 items-baseline'>
              <h2 className='font-bold text-2xl'>{doctor?.Name}</h2>
              <h2 className='flex gap-2 text-gray-500 text-md'>
                <GraduationCap />
                <span>{doctor?.Year_of_Experience} of Experiences</span>
              </h2>
              <h2 className='flex gap-2 text-gray-500 text-md'><MapPin /> {doctor?.Address}</h2>
              <h2 className='text-[10px] bg-heroBg p-1 rounded-full px-2 text-font mb-1'>{doctor?.Categories?.Name}</h2>
              <div className='flex gap-3 items-center'>
                {socialMediaIcon.map((item) => (
                  <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className='w-10 h-10 '>
                    <img src={item.icon} alt={item.name} className='rounded-full ' />
                  </a>
                ))}
              </div>
              <BookAppointment />
            </div>
          </div>
        </div>
        <div className='rounded-xl border-[1px] border-gray-200  p-5 mt-5'>
          <h2 className='font-bold text-2xl'>About Me</h2>
          <p className='text-gray-500 tracking-wide mt-2'>{doctor?.About}</p>
        </div>
      </div>
      <div className=' w-[30%] hidden xl:flex'>
        <SuggestionDoctorList />
      </div>
    </section>
  )
}
