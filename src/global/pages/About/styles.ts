import { css } from "styled-components";
import styled from "styled-components/native";

type TypeProps = {
  type: string;
};

export const Header = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    height: 340px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`;

export const TitleBack = styled.Text`
  position: absolute;
  top: 60px;
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.1);
`;

export const BackButton = styled.TouchableOpacity`
  top: 70px;
  left: 40px;
  position: absolute;
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const CircleImage = styled.Image`
  width: 125px;
  height: 125px;
  position: absolute;
`;
export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const RigthSide = styled.View`
  width: 50%;
  margin-left: 30px;
  position: relative;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    color: ${theme.colors.light_text};
  `}
`;
export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-size: 28px;
    font-weight: bold;
    line-height: 38px;
    text-transform: capitalize;
    color: ${theme.colors.textWhite};
  `}
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;
export const PokemonType = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.boxType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    text-transform: capitalize;
    color: ${theme.colors.textWhite};
  `}
`;
export const ImageCardDetailLSide = styled.Image`
  width: 85px;
  height: 50px;
  right: 10px;
  top: 220px;
  position: absolute;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 20px;
    flex: 1;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    margin-top: -40px;
    background-color: ${theme.colors.background};
    align-items: center;
  `}
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-size: 20px;
    font-weight: bold;
    line-height: 19px;
    text-transform: capitalize;
    padding: 18px;
    color: ${theme.colors.boxType[type]};
  `}
`;

export const StatusBar = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Atributes = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    width: 40%;
    font-weight: 500;
    text-transform: capitalize;
    color: ${theme.colors.light_text};
  `}
`;
export const AtributesValue = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;
    text-transform: capitalize;
    text-align: right;
    margin-left: 20px;
    color: ${theme.colors.light_text};
  `}
`;
export const ContentBar = styled.View`
  margin-left: 20px;
`;

export const ContainerAbilities = styled.View`
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Abilities = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    color: ${theme.colors.boxType[type]};
    border: 1px;
    border-color: ${theme.colors.boxType[type]};
    padding: 8px;
    border-radius: 10px;
  `}
`;
