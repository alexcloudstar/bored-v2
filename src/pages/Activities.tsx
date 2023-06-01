import { Col, Row, Space } from 'antd';
import { Activity, FormComponent } from 'src/components';

const Activities = () => {
  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Space align='center' direction='vertical' size='middle'>
            <FormComponent />
            <Activity />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Activities;
