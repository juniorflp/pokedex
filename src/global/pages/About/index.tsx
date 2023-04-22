import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../../service/api";
import { AxiosResponse } from "axios";
import { useTheme } from "styled-components";
import { PokemonAbout } from "../../../@types/pokemon-about.interface";
import { Feather } from "@expo/vector-icons";
import circle from "../../../assets/img/circle.png";
import * as S from "./styles";
import { FadeAnimation } from "../../../components/FadeAnimation";
import dotsImg from "../../../assets/img/dots.png";
import { Bar } from "react-native-progress";

type RouteParams = {
  pokemonId: number;
};

export function About() {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const { goBack } = useNavigation();
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState<PokemonAbout>();
  const [loading, setLoading] = useState(true);

  const getPokemonById = async (pokemonId: number) => {
    try {
      const response: AxiosResponse<PokemonAbout> = await api.get(
        `/pokemon/${pokemonId}`
      );
      const { stats, abilities, id, name, types, weight } = response.data;

      const currentType = types[0].type.name;
      const color = colors.backgroundCard[currentType];

      setPokemon({ stats, abilities, id, name, types, weight, color });
    } catch (error) {
      alert("algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pokemon) {
    }
    getPokemonById(pokemonId);
  }, []);

  return (
    <>
      {loading ? (
        <Text style={{ marginTop: 100 }}>Loading...</Text>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "#ffff" }}>
          <S.Header type={pokemon.types[0].type.name}>
            <S.TitleBack>{pokemon.name}</S.TitleBack>
            <S.BackButton onPress={() => goBack()}>
              <Feather name="chevron-left" size={24} color="#ffff" />
            </S.BackButton>
            <S.ContentImage>
              <S.CircleImage source={circle} />
              <FadeAnimation>
                <S.PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                  }}
                />
              </FadeAnimation>
            </S.ContentImage>
            <S.RigthSide>
              <S.PokemonId>#{pokemon.id}</S.PokemonId>
              <S.PokemonName>{pokemon.name}</S.PokemonName>
              <S.PokemonContentType>
                {pokemon.types.map((item) => (
                  <S.PokemonType key={item.type.name} type={item.type.name}>
                    <S.PokemonTypeText>{item.type.name}</S.PokemonTypeText>
                  </S.PokemonType>
                ))}
              </S.PokemonContentType>
            </S.RigthSide>
            <S.ImageCardDetailLSide source={dotsImg} />
          </S.Header>

          <S.Container>
            <S.Title type={pokemon.types[0].type.name}>Base Stats</S.Title>
            {pokemon.stats.map((atribute) => (
              <S.StatusBar key={atribute.stat.name}>
                <S.Atributes>{atribute.stat.name}</S.Atributes>
                <S.ContentBar>
                  <Bar
                    progress={atribute.base_stat / 100}
                    width={100}
                    color={pokemon.color}
                  />
                </S.ContentBar>
                <S.AtributesValue>{atribute.base_stat}</S.AtributesValue>
              </S.StatusBar>
            ))}
            <S.Title type={pokemon.types[0].type.name}>Abilites</S.Title>
            <S.ContainerAbilities>
              {pokemon.abilities.map((item) => (
                <S.Abilities type={pokemon.types[0].type.name}>
                  {item.ability.name}
                </S.Abilities>
              ))}
            </S.ContainerAbilities>
          </S.Container>
        </ScrollView>
      )}
    </>
  );
}
