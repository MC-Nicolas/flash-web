import React from 'react';
import { useAppSelector } from '../../redux/redux.hooks';

import {
  StyledFlexContainer,
  StyledFlexContainerProps,
} from './FlexContainer.component.styles';

const FlexContainer = ({ children, ...props }: StyledFlexContainerProps) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <StyledFlexContainer theme={theme} {...props}>
      {children}
    </StyledFlexContainer>
  );
};

export default FlexContainer;
