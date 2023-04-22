import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: ${theme.colors.types.water};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.textWhite};
  `}
`;
