import styled from 'styled-components';

export const StyledDarkPlainButton = styled.button`
  box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.5),
    -6px -6px 9px 0px rgba(255, 255, 255, 0.05);
  color: ${(props) => props.theme.fonts.colors.main};
  font-size: ${(props) => props.theme.fonts.sizes.button};
  letter-spacing: ${(props) => props.theme.fonts.spacings.main};
  border: none;
  width: 210px;
  height: 65px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.mainBackground};
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    box-shadow: 5px 3px 10px 0px rgba(0, 0, 0, 0.5),
      -3px -3px 6px 0px rgba(255, 255, 255, 0.05);
  }
`;
