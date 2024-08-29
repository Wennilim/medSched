import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export const CategorySearch = () => {
    return (
        <div className='flex flex-col items-center mb-10 gap-4'>
            <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-logo'>Doctors</span></h2>
            <h2 className='text-xl text-gray-400'>Search your Doctor and Book an Appointment with your finger tips</h2>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input className='w-full text-xl py-2 border border-gray-300 rounded-xl' type="text" placeholder=" Search..." />
                <Button className='bg-logo hover:bg-hover text-white px-4 py-3 rounded-xl' type="submit">Search</Button>
            </div>
        </div>
    )
}
