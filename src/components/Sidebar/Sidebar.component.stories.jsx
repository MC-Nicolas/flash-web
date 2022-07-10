import { Router } from 'react-router-dom';

import Sidebar from './Sidebar.component';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
};

const Template = (args) => (
  <Router>
    <Sidebar {...args} />
  </Router>
);

export const SidebarDefault = Template.bind({});
SidebarDefault.args = {};

// See Error
