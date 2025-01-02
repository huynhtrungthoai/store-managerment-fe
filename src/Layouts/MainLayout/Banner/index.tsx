import { Row } from 'antd';
import bg from '../../../assets/images/greenking_travel.jpg';

interface IProps {}

const Banner: React.FC<IProps> = ({}: IProps) => {
  return (
    <Row
      className="banner"
      style={{
        width: '100%',
        height: '320px',
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'left bottom',
        backgroundSize: 'cover',
      }}
    />
  );
};

export default Banner;
