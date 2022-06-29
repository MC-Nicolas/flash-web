import styled from 'styled-components';

export interface StyledFlexContainerProps {
  children: JSX.Element | JSX.Element[];
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-evenly'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  flexDirection?: 'row' | 'column';
  width?: string;
  height?: string;
  isTest?: boolean;
  theme?: any;
  style?: any;
}

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: ${(props: StyledFlexContainerProps) =>
    props.justifyContent ?? 'center'};
  align-items: ${(props: StyledFlexContainerProps) =>
    props.alignItems ?? 'center'};
  flex-direction: ${(props: StyledFlexContainerProps) =>
    props.flexDirection ?? 'row'};
  border: ${(props: StyledFlexContainerProps) =>
    props.isTest ? '1px solid red' : 'none'};
  width: ${(props: StyledFlexContainerProps) => props.width ?? '100%'};
  height: ${(props: StyledFlexContainerProps) => props.height ?? '100%'};
  background-color: ${(props: StyledFlexContainerProps) =>
    props.theme.colors.mainBackground};
`;
