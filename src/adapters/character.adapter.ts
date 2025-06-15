import { CharacterInfo } from "../models/character.model";

export const CharacterAdapter = (CharacterInfo: CharacterInfo) => {
    return CharacterInfo.results;
    // Se extraen los datos en .results que toman la forma a Character ya que en CharacterInfo se indica que este será
    // su tipo de dato. los [] indican que será más de un elemento que se recibirá y por ende se escogen los datos que
    // cumplen con la forma de Character
}