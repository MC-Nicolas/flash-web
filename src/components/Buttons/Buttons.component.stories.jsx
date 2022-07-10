import { NeumorphicButton } from './Buttons.component';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default {
  title: 'Components/Buttons',
  component: NeumorphicButton,
};

const Template = (args) => (
  <NeumorphicButton icon={<DoubleArrowIcon />} {...args} />
);
export const BasicNeumorphicButton = Template.bind({
  onClick: () => console.log('test button'),
});
