import CardDefault from '@/components/Card/CardDefault';
import { Col } from 'antd';
import moment from 'moment';
import styles from './index.module.scss';

interface IProps {}

const CardTour: React.FC<IProps> = (props: IProps) => {
  const listData = [
    {
      id: '1',
      date: moment().format('YYYY/MM/DD'),
      dateNumber: '1',
      title: 'Tour Thái Lan - Singapore tham quan biểu tượng sư tử biển',
      code: 'ACVB-GGGH-HRHRH-HH',
      from: 'Tp. Hồ Chí Minh',
      price: '15000000',
      percentPromotion: '10',
      url: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80',
    },
    {
      id: '2',
      date: moment().format('YYYY/MM/DD'),
      dateNumber: '2',
      title: 'Tour Thái Lan - Singapore tham quan biểu tượng sư tử biển',
      code: 'ACVB-GGGH-HRHRH-HH',
      from: 'Tp. Hồ Chí Minh',
      price: '15000000',
      percentPromotion: '10',
      url: 'https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
    },
    {
      id: '3',
      date: moment().format('YYYY/MM/DD'),
      dateNumber: '3',
      title: 'Tour Thái Lan - Singapore tham quan biểu tượng sư tử biển',
      code: 'ACVB-GGGH-HRHRH-HH',
      from: 'Tp. Hồ Chí Minh',
      price: '15000000',
      percentPromotion: '10',
      url: 'https://images.unsplash.com/photo-1622086674545-1346776dfef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    },
    {
      id: '4',
      date: moment().format('YYYY/MM/DD'),
      dateNumber: '4',
      title: 'Tour Thái Lan - Singapore tham quan biểu tượng sư tử biển',
      code: 'ACVB-GGGH-HRHRH-HH',
      from: 'Tp. Hồ Chí Minh',
      price: '15000000',
      percentPromotion: '10',
      url: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: '5',
      date: moment().format('YYYY/MM/DD'),
      dateNumber: '5',
      title: 'Tour Thái Lan - Singapore tham quan biểu tượng sư tử biển sư -tử',
      code: 'ACVB-GGGH-HRHRH-HH',
      from: 'Tp. Hồ Chí Minh',
      price: '15000000',
      percentPromotion: '10',
      url: 'https://images.unsplash.com/photo-1496664444929-8c75efb9546f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
  ];

  const handleOnClick = (value: string) => {
    console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 value: ', value);
  };

  return (
    // <>
    //   {Array(5)
    //     .fill(0)
    //     .map((_, i) => {
    //       return (
    //         <Col className={styles.cardTour}>
    //           <CardDefault loading={false}></CardDefault>
    //         </Col>
    //       );
    //     })}
    // </>
    <>
      {listData.map((item) => (
        <Col className={styles.cardTour} id={`tour__${item.id}`} key={`tour__${item.id}`}>
          <CardDefault data={item} isHiddenBody={false} onClick={handleOnClick} />
        </Col>
      ))}
    </>
  );
};

export default CardTour;
