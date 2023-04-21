import * as React from "react";
import { Text, TouchableOpacityProps } from "react-native";
import * as S from "./styles";
import dotsImg from "../../assets/img/dots.png";
import pokeballImg from "../../assets/img/pokeballCard.png";
import { Pokemon } from "../../global/pages/Home";

type CardProps = {
  data: Pokemon;
} & TouchableOpacityProps;

const Card = ({ data, ...rest }: CardProps) => {
  return (
    <S.PokemonsCard type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLSide source={dotsImg} />
        <S.PokemonContentType>
          {data.types.map((item) => (
            <S.PokemonType key={item.type.name} type={item.type.name}>
              <S.PokemonTypeText>{item.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide>
        <S.PokeballDetail source={pokeballImg} />
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
      </S.RightSide>
    </S.PokemonsCard>
  );
};

export default Card;
