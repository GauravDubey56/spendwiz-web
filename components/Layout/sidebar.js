import { MailOutlined, SettingOutlined, AppstoreOutlined, DatabaseFilled, FormOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Dashboard', 'sub2', <AppstoreOutlined />, null),
  getItem('Events', 'sub1', <DatabaseFilled />),
  getItem('Create Event', 'sub12', <FormOutlined />),
  getItem('Settings', 'sub4', <SettingOutlined />),
];
const Sidebar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      theme="light"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Sidebar;