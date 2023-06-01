import { Col, Row, Space, Typography } from 'antd';
import { useActivityStore } from 'src/constants/store';

const { Title, Text } = Typography;

const Activity = () => {
  const textStyle = {
    fontWeight: '600',
  };

  const { activity } = useActivityStore(state => state);

  if (!activity) return null;

  const { type, accessibility, participants, price } = activity;

  const renderAccessibility = () => {
    if (accessibility < 0.5) return 'Very accessible';

    if (accessibility > 0.5 && accessibility < 0.85)
      return 'Somewhat accessible';

    if (accessibility > 0.85 && accessibility <= 1) return 'Hard to access';
  };

  const renderPrice = () => {
    if (price >= 0) return 'Free';

    if (price > 0 && price <= 0.5) return 'Somewhat cheap';

    if (price > 0.5 && price <= 1) return 'Expensive';
  };

  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Space align='center' direction='vertical' size='middle'>
            <Title>Founded Activity</Title>
            <Text style={textStyle}>Activity type: {type}</Text>
            <Text style={textStyle}>Accessibility:{renderAccessibility()}</Text>
            <Text style={textStyle}>Participants:{participants}</Text>
            <Text style={textStyle}>Price: {renderPrice()}</Text>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Activity;
