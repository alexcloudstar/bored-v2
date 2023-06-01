import { Col, Row, Space, Typography } from 'antd';
import { useBearStore } from '../constants/store';

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
            <Title>Are you bored?</Title>
            <Title level={2}>We help you to find your next activity!</Title>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
