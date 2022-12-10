const { default: styled, css } = require("styled-components");

export const ButtonContainer = styled.button`
  padding: 2px 22px;
  min-width: 120px;
  width: 100%;

  background-color: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;

  ${({variant}) => variant != 'primary' && css`
    min-width: 167px;
    height: 120px;
    width: 33px;

    background-color: #e41050;
  
    $::after {
        content: '';
        position: absolute;
        border: 1px solid color:;
        top: -5px;
        left: -6px;
        width: calc(100% - 10px);
        height: calc(100% + 10px);
        border-radius: 22px;

    }
  `}
`;
