import { Header } from '@/components/custom/Header';
import { Outlet } from 'react-router-dom';


export const RootLayout = () => {
    return (
        <main className='h-[100vh-45px] bg-gray-500'>
            <div className='mx-auto bg-white'>
                <Header />
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </main>
    );
};
