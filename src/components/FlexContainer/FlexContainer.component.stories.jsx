import FlexContainer from './FlexContainer.component';

import ReduxProvider from '../../redux/Provider';
import store from '../../redux/store';

export default {
  title: 'Components/Flex Container',
  component: FlexContainer,
  argsTypes: {
    numberOfChildren: { type: 'number', default: 4 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <ReduxProvider store={store}>
    <FlexContainer {...args}>
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
    </FlexContainer>
  </ReduxProvider>
);
export const BasicFlexContainer = Template.bind({});
BasicFlexContainer.args = {
  isTest: false,
  numberOfChildren: 4,
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: true,
  gap: '10px',
  width: '100%',
  height: '100%',
  style: {},
};
