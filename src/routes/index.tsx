import { MainLayout } from '@/Layouts/MainLayout';
import { LoginPages, WelcomePages } from '@/containers';
import DashboardPages from '@/containers/dashboard/dashboardPages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PATH_DASHBOARD } from './paths';

interface IProps {}
const RootRouter: React.FC<IProps> = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<MainLayout />}>
        <Route path={PATH_DASHBOARD.WELCOME} element={<WelcomePages />} />
        {/* AUTH */}
        <Route path={PATH_DASHBOARD.LOGIN} element={<LoginPages />} />
        {/* ADMIN */}
        <Route path={PATH_DASHBOARD.DASHBOARD} element={<DashboardPages />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
