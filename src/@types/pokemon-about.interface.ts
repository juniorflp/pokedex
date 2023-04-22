export interface PokemonAbout {
  id: number;
  name: string;
  abilities: Ability[];
  stats: Stats[];
  types: Types[];
  weight: number;
  color: string;
}

export type Ability = {
  ability: {
    name: string;
  };
};
export type Stats = {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
  effort: number;
};
export type Types = {
  type: {
    name: string;
    url: string;
  };
  slot: number;
};
