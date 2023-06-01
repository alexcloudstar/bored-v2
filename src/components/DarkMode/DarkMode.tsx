import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Space, Switch, Typography } from 'antd';
import { useDarkModeStore } from 'src/constants/store';

const { Title } = Typography;

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore(state => state);

  const onToggle = () => toggleDarkMode();

  return (
    <>
      <Space align='center' direction='vertical'>
        <Title level={3}>Toggle Dark Mode</Title>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
          checked={darkMode}
          size='default'
          onClick={onToggle}
        />
      </Space>
    </>
  );
};

export default DarkMode;
