import { BasicParagraph } from './Texts.component';

export default {
  title: 'Components/Texts',
  component: BasicParagraph,
};

const Template = (args) => <BasicParagraph {...args} />;

export const BasicText = Template.bind({});
BasicText.args = {
  text: 'This is a very simple text',
  fontSize: '22px',
  color: 'black',
  letterSpacing: '1px',
};
