import DarkContainer from './DarkContainer.component';

export default {
  title: 'Components/DarkContainer',
  component: DarkContainer,
  argsTypes: {
    numberOfChildren: { type: 'number', default: 4 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <DarkContainer {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        key={n}
        style={{
          width: '50px',
          height: '50px',
          minWidth: '50px',
          minHeight: '50px',
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        {n + 1}
      </div>
    ))}
  </DarkContainer>
);

export const BasicDarkContainer = Template.bind({});
BasicDarkContainer.args = {
  numberOfChildren: 4,
  height: '100%',
  minHeight: '100%',
  style: {},
  innerStyle: {},
};
