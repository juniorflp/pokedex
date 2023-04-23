import styled, { css } from "styled-components/native";
import { Dimensions, SafeAreaView } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    height: 220px;
    position: absolute;
    top: 0px;
    margin-left: -20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.light_text};
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    margin-top: 100px;
  `}
`;

export const WrapInput = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 16px;
  background-color: white;
  align-items: center;
  padding: 10px 30px;
  flex-direction: row;
  box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ButtonToTop = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
export const PokemonLogo = styled.Image`
  margin-top: 70px;
  width: 200px;
  height: 73px;
`;

export const Safe = styled(SafeAreaView)`
  flex: 1;
  margin-top: -10px;
`;
