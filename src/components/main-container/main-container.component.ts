import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersService } from '../../services';
import { firstValueFrom, Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharacterCardComponent } from './components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
  private charactersService = inject(CharactersService);

  characterInfo: Record<string, Character> = {};
  characters$: Observable<Character[]> = this.charactersService.getAllCharacters();

  async makeApiCall(url: string) {
    let character = await firstValueFrom(this.charactersService.getCharactersInformation(url),
    );
    // firstValueFrom convierte el Observable en una promesa, la cual retorna el primer valor que este emita y
    // se desuscribe automáticamente

    this.characterInfo[character.id] = character;

  }
}
