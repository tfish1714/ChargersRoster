import { Component, Input } from '@angular/core';
import { Player } from './player.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player-form-component',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {
  @Input() model: Player;s
 constructor(){}
}
