import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, CharacterInfo } from '../models/character.model';
import { CharacterAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private mainUrl = 'https://rickandmortyapi.com/api/';
  private charactersUrl = this.mainUrl + "character";
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http
      .get<CharacterInfo>(this.charactersUrl)
      .pipe(map((result) => CharacterAdapter(result)))
      // el pipe funciona como en Linux recibe un valor y luego ejecuta uan acción con el mismo
      // el map funciona como el método de los arrays .map que recibe un callback y ejecuta una función para cada uno
  }

  getCharactersInformation(url: string): Observable<Character> {
    return this.http.get<Character>(url)
  }
}
