import type { TabsProps } from 'antd';
import { Col, Row, Tabs, Typography } from 'antd';
import Introduce from './components/Introduce';
import CardTour from './components/Tour';
import TravelTab from './components/Travel';
import './style.scss';

interface IProps {}

const HomePage: React.FC<IProps> = (props: IProps) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tour Du Lịch',
      children: <TravelTab />,
    },
    {
      key: '2',
      label: `Khách Sạn`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Vé Máy Bay`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '4',
      label: `Thuê Xe`,
      children: `Content of Tab Pane 4`,
    },
  ];

  const onChange = (key: string) => {
    console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 key: ', key);
  };

  return (
    <>
      <Row className="home">
        <Tabs className="searchView" defaultActiveKey="1" items={items} onChange={onChange} />
        <Col style={{ width: '100%', height: '180px' }}> </Col>
      </Row>
      <div className="home card">
        <Row className={'tour__text'}>
          <Typography.Text className="tour__text-title">Tour giờ chót</Typography.Text>
          <Typography.Text
            className="tour__text-all"
            onClick={() => {
              console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ');
            }}
          >
            Xem tất cả
          </Typography.Text>
        </Row>
        <Row className="card__tour">
          <CardTour />
        </Row>
      </div>
      <div className="home card" style={{ paddingTop: `2.5rem` }}>
        <Row className={'tour__text'}>
          <Typography.Text className="tour__text-title">Địa điểm yêu thích</Typography.Text>
          <Typography.Text
            className="tour__text-all"
            onClick={() => {
              console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ');
            }}
          >
            Xem tất cả
          </Typography.Text>
        </Row>
        <Row className="home introduce">
          <Introduce />
        </Row>
      </div>
    </>
  );
};

export default HomePage;
