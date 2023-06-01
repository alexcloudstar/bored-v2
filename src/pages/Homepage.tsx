import { Button, Col, Row } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useBearStore } from '../constants/store';

const Homepage = () => {
  const { bears, increase, decrease } = useBearStore(state => state);

  const increaseBears = () => increase(1);
  const decreaseBears = () => decrease(1);

  return (
    <>
      <Row>
        <Col span={24}>Current number of 🧸: {bears}</Col>
        <Col span={24}>
          <Button
            type='primary'
            icon={<PlusOutlined />}
            size='large'
            onClick={increaseBears}
          />
          <Button
            type='primary'
            icon={<MinusOutlined />}
            size='large'
            onClick={decreaseBears}
          />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
