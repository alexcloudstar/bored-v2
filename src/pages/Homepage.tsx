import { Col, Image, Row, Space, Typography } from 'antd';
import { useBearStore } from '../constants/store';
import Logo from 'src/assets/logo.png';
import { DarkMode } from 'src/components';

const { Title } = Typography;

const Homepage = () => {
  const { bears, increase, decrease } = useBearStore(state => state);

  const increaseBears = () => increase(1);
  const decreaseBears = () => decrease(1);

  return (
    <>
      <Row>
        <Col span={24}>
          <Space align='center' direction='vertical'>
            <Image
              src={Logo}
              alt='Alex Cloudstar Logo'
              width={150}
              height={150}
              preview={false}
            />
            <Title>Are you bored?</Title>
            <Title level={2}>We help you to find your next activity!</Title>
            <DarkMode />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
