import { Info } from "./api.model";

enum Gender {
    "MALE" = "Male",
    "FEMALE" = "Female",
    "GENDERLESS" = "Genderless",
    "UNKNOW" = "unknow",
}

export interface LinkedElement {
    name: string;
    link: string;
}

export interface Origin extends LinkedElement { }
export interface Location extends LinkedElement { }

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: Gender;
    // origin: {name: string;link: string;}; forma valida pero ineficiente
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharacterInfo {
    info: Info;
    results: Character[];
}