import styled, { css } from "styled-components/native";

type PokemonType = {
  type: string;
};
export const PokemonsCard = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css`
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
    background: ${theme.colors.backgroundCard[type]};
  `}
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const ImageCardDetailLSide = styled.Image`
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
  position: absolute;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-size: 25px;
    font-weight: bold;
    line-height: 31px;
    text-transform: capitalize;
    color: ${theme.colors.textWhite};
  `}
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
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

export const RightSide = styled.View`
  width: 50%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 130px;
  height: 130px;
  margin-top: -40px;
`;

export const PokeballDetail = styled.Image`
  position: absolute;
  right: -20px;
`;
