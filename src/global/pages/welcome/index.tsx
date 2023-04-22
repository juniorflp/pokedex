import React from "react";
import * as S from "./styles";
import { Text } from "react-native";
import pokemonAnimation from "./pokemon.json";
import AnimatedLottieView from "lottie-react-native";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import pokeBallHeader from "../../../assets/img/pokeball.png";

export const Welcome = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("Home");
  };

  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <S.WrapperImage>
            <AnimatedLottieView
              style={{ width: 200 }}
              autoPlay
              source={pokemonAnimation}
              loop
            />
          </S.WrapperImage>
        </S.WrapperAnimation>
        <S.Title>Bem Vindo</S.Title>
        <S.SubTitle>Encontre todos Pokemons em um só lugar</S.SubTitle>
      </S.Content>
      <S.Footer>
        <S.BgImage source={pokeBallHeader} />
        <Button title="Iniciar" onPress={handleNavigation} />
      </S.Footer>
    </S.Container>
  );
};
