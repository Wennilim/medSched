/* eslint-disable @typescript-eslint/no-explicit-any */
import { DoctorList } from '@/components/custom/DoctorList';
import { getDoctorByCategoryApi } from '@/utils/api/getDoctorByCategoryApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const Doctors = () => {
  const category = useParams()
  const getDoctorByCategoryQuery = useQuery({
    queryKey: ['getDoctorByCategory', category.category],
    queryFn: () => getDoctorByCategoryApi(category.category ?? ''),
    enabled: true,
    staleTime: 0,
  });

  return (
    <div className='p-4'>
      <DoctorList heading={getDoctorByCategoryQuery?.data?.data.map((item: any) => item.Categories.Name)} getQuery={getDoctorByCategoryQuery} />
    </div>

  )
}
