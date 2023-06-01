import { Button, Col, Image, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/logo.png';
import { DarkMode } from 'src/components';

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Space align='center' direction='vertical' size='middle'>
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
            <Link to='/activities'>
              <Button type='dashed' color='#000'>
                LET'S FIND OUT!
              </Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
