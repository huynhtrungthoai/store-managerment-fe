import { PATH_DASHBOARD } from '@/routes/paths';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { LoginForm } from './LoginForm';

export const LoginPages = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onSubmit={() => navigate(PATH_DASHBOARD.DASHBOARD)} />
      </div>
    </div>
  );
};
