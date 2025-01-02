import { PATH_DASHBOARD } from '@/routes/paths';
import { images } from '@/themes';
import { Col } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export const WelcomePages = () => {
  const navigate = useNavigate();
  const isLogin = false;

  useEffect(() => {
    setTimeout(() => {
      if (isLogin) {
        navigate(PATH_DASHBOARD.HOME);
      } else {
        navigate(PATH_DASHBOARD.LOGIN);
      }
    }, 2000);
  }, []);

  return (
    <Col className="flex items-center justify-center h-screen">
      <Col className="flex items-center justify-center flex-col">
        <img src={images.Logo} className="w-6/12" alt="img" />
        <div className="text-black text-4xl mt-4 font-semibold">Welcome!</div>
      </Col>
    </Col>
  );
};
