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
import { useApiContext } from "../../../context/ApiContext";

type RouteParams = {
  pokemonId: number;
};

export function About() {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const { goBack } = useNavigation();
  const { dataPokemonId, isLoading, getPokemonById } = useApiContext();

  useEffect(() => {
    getPokemonById(pokemonId);
  }, []);

  return (
    <>
      {isLoading ? (
        <Text style={{ marginTop: 100 }}>Loading...</Text>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "#ffff" }}>
          <S.Header type={dataPokemonId?.types[0].type.name}>
            <S.TitleBack>{dataPokemonId?.name}</S.TitleBack>
            <S.BackButton onPress={() => goBack()}>
              <Feather name="chevron-left" size={24} color="#ffff" />
            </S.BackButton>
            <S.ContentImage>
              <S.CircleImage source={circle} />
              <FadeAnimation>
                <S.PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dataPokemonId?.id}.png`,
                  }}
                />
              </FadeAnimation>
            </S.ContentImage>
            <S.RigthSide>
              <S.PokemonId>#{dataPokemonId?.id}</S.PokemonId>
              <S.PokemonName>{dataPokemonId?.name}</S.PokemonName>
              <S.PokemonContentType>
                {dataPokemonId?.types.map((item) => (
                  <S.PokemonType key={item.type.name} type={item.type.name}>
                    <S.PokemonTypeText>{item.type.name}</S.PokemonTypeText>
                  </S.PokemonType>
                ))}
              </S.PokemonContentType>
            </S.RigthSide>
            <S.ImageCardDetailLSide source={dotsImg} />
          </S.Header>

          <S.Container>
            <S.Title type={dataPokemonId?.types[0].type.name}>
              Base Stats
            </S.Title>
            {dataPokemonId?.stats.map((atribute) => (
              <S.StatusBar key={atribute.stat.name}>
                <S.Atributes>{atribute.stat.name}</S.Atributes>
                <S.ContentBar>
                  <Bar
                    progress={atribute.base_stat / 100}
                    width={100}
                    color={dataPokemonId?.color}
                  />
                </S.ContentBar>
                <S.AtributesValue>{atribute.base_stat}</S.AtributesValue>
              </S.StatusBar>
            ))}
            <S.Title type={dataPokemonId?.types[0].type.name}>Abilites</S.Title>
            <S.ContainerAbilities>
              {dataPokemonId?.abilities.map((item) => (
                <S.Abilities
                  key={item.ability.name}
                  type={dataPokemonId?.types[0].type.name}
                >
                  {item.ability.name}
                </S.Abilities>
              ))}
            </S.ContainerAbilities>
            <S.FlexData>
              <View>
                <S.Title type={dataPokemonId?.types[0].type.name}>
                  Weight
                </S.Title>
                <S.Abilities type={dataPokemonId?.types[0].type.name}>
                  {dataPokemonId.weight / 100} kg
                </S.Abilities>
              </View>
              <View>
                <S.Title type={dataPokemonId?.types[0].type.name}>
                  Height
                </S.Title>
                <S.Abilities type={dataPokemonId?.types[0].type.name}>
                  {dataPokemonId.height * 10} cm
                </S.Abilities>
              </View>
            </S.FlexData>
          </S.Container>
        </ScrollView>
      )}
    </>
  );
}
