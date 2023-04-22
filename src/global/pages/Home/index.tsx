import React, { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../../service/api";
import { FlatList, Text } from "react-native";
import Card from "../../../components/Card";
import pokeBallHeader from "../../../assets/img/pokeball.png";
import { Input } from "../../../components/Input";
import { Feather } from "@expo/vector-icons";
import { AxiosResponse } from "axios";

export type PokemonType = {
  type: {
    name: string;
  };
};

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type Request = {
  id: number;
  types: PokemonType[];
};

export const Home = ({ navigation }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [text, setText] = useState("");

  async function getAllPokemons() {
    const response = await api.get("/pokemon");
    const { results } = response.data;

    const payloadPokemons = await Promise.all(
      results.map(async (pokemon: Pokemon) => {
        const { id, types } = await getMoreInfo(pokemon.url);

        return {
          name: pokemon.name,
          id,
          types,
        };
      })
    );

    setPokemons(payloadPokemons);
  }
  useEffect(() => {
    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return {
      id,
      types,
    };
  }

  async function getAllPokemonsName(name1: string) {
    const response: AxiosResponse<Pokemon> = await api.get(`/pokemon/${name1}`);
    const { id, types, name } = response.data;

    console.log("resp", [{ id, types, name: "test" }]);
    setPokemons([{ id, types, name, url: "" }]);
  }

  const handleNavigate = (pokemonId: number) => {
    navigation.navigate("About", { pokemonId });
  };

  const handleSearch = async () => {
    await getAllPokemonsName(text.toLowerCase());
    console.log(text);
  };

  return (
    <S.Container>
      <FlatList
        ListHeaderComponentStyle={{ display: "flex", alignItems: "center" }}
        ListHeaderComponent={
          <>
            <S.Header source={pokeBallHeader}></S.Header>
            <S.Title>Pokédex</S.Title>
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
      />
    </S.Container>
  );
};
