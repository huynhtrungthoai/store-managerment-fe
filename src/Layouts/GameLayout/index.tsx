import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

interface IProps {}

const GameLayout: React.FC<IProps> = (props: IProps) => {
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setGame(crosswordData));
  // }, []);

  return (
    <Layout>
      <Content className={`${styles.content} container`}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default GameLayout;
