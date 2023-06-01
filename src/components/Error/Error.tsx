import { Typography } from 'antd';
import { useActivityStore } from 'src/constants/store';

const { Title } = Typography;

const Error = () => {
  const { error } = useActivityStore(state => state);

  return (
    <>
      <Title
        level={4}
        style={{
          color: '#f54251',
        }}
      >
        {error}
      </Title>
    </>
  );
};

export default Error;
