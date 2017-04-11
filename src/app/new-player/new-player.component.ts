import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { PlayerFormComponent } from '../player-form.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [ PlayerService ]
})
export class NewPlayerComponent {
  public model: Player;

  constructor(private playerService: PlayerService, private router: Router) {
    this.model = new Player();
  }

  submitNewPlayer() {
    this.playerService.addPlayer(this.model);
    this.router.navigate(['']);
  }
}
