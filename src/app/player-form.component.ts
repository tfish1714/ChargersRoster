import { Component, Input } from '@angular/core';
import { PlayerService } from './player.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player-form-component',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
  providers: [ PlayerService ]
})
export class PlayerDetailComponent {
 @Input model: Player;
}
