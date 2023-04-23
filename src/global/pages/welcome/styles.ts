import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View`
  ${({ theme }) => css`
    flex:1
    background-color: ${theme.colors.backgroundWather}
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    height: 70%;
    justify-content: center;
    align-items: center;
  `}
`;
export const WrapperAnimation = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${theme.colors.types.water};
    transform: rotate(30deg);
  `}
`;
export const WrapperImage = styled.View`
  transform: rotate(-30deg);
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    position: relative;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    padding: 20px;
    background-color: ${theme.colors.background};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 30px;
    font-size: 40px;
    color: ${theme.colors.textWhite};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    margin-top: 20px;
    color: ${theme.colors.textWhite};
  `}
`;

export const BgImage = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    position: absolute;
    top: 0px;
    height: 220px;
    margin-left: -20px;
  `}
`;
