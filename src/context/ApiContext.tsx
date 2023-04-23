import { createContext, useState, useContext } from "react";
import api from "../service/api";
import { Pokemon, RequestList } from "../@types/pokemon-list.interface";
import { Text } from "react-native";
import { AxiosResponse } from "axios";
import { PokemonAbout } from "../@types/pokemon-about.interface";
import { useTheme } from "styled-components";

type ApiContextType = {
  isLoading: boolean;
  pokemons: Pokemon[];
  dataPokemonId: PokemonAbout | undefined;
  getAllPokemons: () => Promise<void>;
  getPokemonsByName: (namePokemon: string) => Promise<void>;
  getPokemonById: (pokemoid: number) => Promise<void>;
};

export const ApiContext = createContext<ApiContextType>({
  isLoading: true,
  pokemons: [],
  getAllPokemons: async () => {},
  getPokemonsByName: async () => {},
  getPokemonById: async () => {},
  dataPokemonId: undefined,
});

export const ApiProvider = ({ children }) => {
  const { colors } = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [dataPokemonId, setdataPokemonId] = useState<PokemonAbout>();

  const getAllPokemons = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/pokemon?&limit=151");
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
    } catch (error) {
      alert("algo deu errado");
    } finally {
      setIsLoading(false);
    }
  };
  async function getMoreInfo(url: string): Promise<RequestList> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return {
      id,
      types,
    };
  }

  async function getPokemonsByName(namePokemon: string) {
    try {
      setIsLoading(true);

      if (!namePokemon) {
        getAllPokemons();
      }
      const response: AxiosResponse<Pokemon> = await api.get(
        `/pokemon/${namePokemon}`
      );
      const { id, types, name, url } = response.data;

      setPokemons([{ id, types, name, url }]);
    } catch (error) {
      alert("Este pokemon não exite");
    } finally {
      setIsLoading(false);
    }
  }

  const getPokemonById = async (pokemonId: number) => {
    try {
      const response: AxiosResponse<PokemonAbout> = await api.get(
        `/pokemon/${pokemonId}`
      );
      const { stats, abilities, id, name, types, weight, height } =
        response.data;

      const currentType = types[0].type.name;
      const color = colors.backgroundCard[currentType];

      setdataPokemonId({
        stats,
        abilities,
        id,
        height,
        name,
        types,
        weight,
        color,
      });
    } catch (error) {
      alert("algo deu errado");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        isLoading,
        pokemons,
        getAllPokemons,
        getPokemonsByName,
        dataPokemonId,
        getPokemonById,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  return context;
};
