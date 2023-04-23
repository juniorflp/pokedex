import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { FlatList, Text, TouchableOpacity, StatusBar } from "react-native";
import Card from "../../../components/Card";
import pokeBallHeader from "../../../assets/img/pokeball.png";
import { Input } from "../../../components/Input";
import { Feather } from "@expo/vector-icons";
import { useApiContext } from "../../../context/ApiContext";
import logo from "../../../assets/img/pokemon-logo.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaViewBase } from "react-native";

export const Home = ({ navigation }) => {
  const [text, setText] = useState("");
  const { isLoading, pokemons, getAllPokemons, getPokemonsByName } =
    useApiContext();

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (text === "") {
      getAllPokemons();
    }
  }, [text]);

  const handleNavigate = (pokemonId: number) => {
    navigation.navigate("About", { pokemonId });
  };

  const handleSearch = () => {
    if (!text) {
      alert("Digite um nome válido.");
      return;
    }
    getPokemonsByName(text.toLowerCase().trim());
  };

  return (
    <S.Safe>
      <S.Container>
        <StatusBar />
        <>
          <FlatList
            ref={flatListRef}
            ListHeaderComponentStyle={{ display: "flex", alignItems: "center" }}
            ListHeaderComponent={
              <>
                <S.Header source={pokeBallHeader}></S.Header>
                <S.PokemonLogo source={logo} />
                <S.WrapInput>
                  <Input
                    placeholder="Procure seu Pokemon!"
                    onChangeText={setText}
                    value={text}
                    onSubmitEditing={handleSearch}
                    returnKeyType="search"
                  />
                  <Feather
                    name="search"
                    size={20}
                    color="#494949"
                    onPress={handleSearch}
                  />
                </S.WrapInput>
              </>
            }
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            data={pokemons}
            keyExtractor={(pokemon) => pokemon.id.toString()}
            renderItem={({ item: pokemon }) => (
              <Card data={pokemon} onPress={() => handleNavigate(pokemon.id)} />
            )}
            ListFooterComponent={() => {
              if (isLoading) {
                return <Text>Loading...</Text>;
              }
              return null;
            }}
          />

          <S.ButtonToTop
            onPress={() => {
              if (flatListRef.current) {
                flatListRef.current.scrollToIndex({ index: 0 });
              }
            }}
          >
            <Feather
              name="arrow-up-circle"
              size={40}
              color="rgba(000,000,000,0.2)"
            />
          </S.ButtonToTop>
        </>
      </S.Container>
    </S.Safe>
  );
};
