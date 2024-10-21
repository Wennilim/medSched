import { Loading } from '@/components/custom/Loading';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const { isAuthenticated, isLoading } = useKindeAuth();

    if (isLoading) {
        return <Loading />
    }

    if (!isAuthenticated && !isLoading) {
        window.location.href = "https://wennilim99.kinde.com/auth/cx/_:nav&m:login&psid:01923294b73178e9f67eeeda88c43321";
    }

    return !isLoading && isAuthenticated && <Outlet />;
};
