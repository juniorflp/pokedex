import * as React from "react";
import * as S from "./styles";
import { TextInputProps } from "react-native";

type Props = {} & TextInputProps;

export function Input({ ...rest }: Props) {
  return <S.InputText {...rest} />;
}
