import { Footer } from '@/components/custom/Footer';
import { Header } from '@/components/custom/Header';
import { ScrollToTop } from '@/components/custom/ScrollToTop';
import { Outlet } from 'react-router-dom';


export const RootLayout = () => {
    return (
        <main className='h-[100vh-45px] bg-gray-500'>
            <div className='mx-auto bg-white'>
                <ScrollToTop />
                <Header />
                <div className='p-5'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </main>
    );
};
