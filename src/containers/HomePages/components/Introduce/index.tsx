import CardDefault from '@/components/Card/CardDefault';
import { Col, Typography } from 'antd';

interface IProps {}

const Introduce: React.FC<IProps> = (props: IProps) => {
  const listData = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      title: 'Hà Nội',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1510852151262-05bfbfbe996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80',
      title: 'Hà Nội',
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1628358011826-7f3b8724239f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      title: 'Hà Nội',
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2362&q=80',
      title: 'Hà Nội',
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1529338296731-c4280a44fc48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      title: 'Hà Nội',
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1596443019365-eb263a588404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80',
      title: 'Hà Nội',
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      title: 'Hà Nội',
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80',
      title: 'Hà Nội',
    },
  ];

  const handleOnClick = (value: string) => {
    console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 value: ', value);
  };

  return (
    <>
      {listData.map((item) => (
        <Col id={`intro_${item.id}`} key={`intro_${item.id}`}>
          <CardDefault data={item} isHiddenBody={true} heightImage={188} onClick={handleOnClick} />
          <Typography.Paragraph>{item.title}</Typography.Paragraph>
        </Col>
      ))}
    </>
  );
};

export default Introduce;
