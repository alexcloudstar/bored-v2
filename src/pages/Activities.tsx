import { Col, Row, Space } from 'antd';
import { Activity, FormComponent, Error, DarkMode } from 'src/components';
import { useActivityStore } from 'src/constants/store';

const Activities = () => {
  const { error } = useActivityStore(state => state);

  return (
    <>
      <Row gutter={[12, 32]} align='middle' justify='center'>
        <Row gutter={[12, 32]} align='middle' justify='center'>
          <Col span={24}>
            <Space align='center' direction='vertical' size='large'>
              <DarkMode />
            </Space>
          </Col>
        </Row>
        <Col span={24} className='center-col'>
          <Space align='center' direction='vertical' size='large'>
            <FormComponent />
            {error ? <Error /> : <Activity />}
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Activities;
