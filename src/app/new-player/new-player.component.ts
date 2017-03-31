import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [ PlayerService ]
})
export class NewPlayerComponent {

  constructor(private playerService: PlayerService, private router: Router) { }

  submitNewPlayer(description: string,
                     lastName: string,
                     firstName: string,
                     birthDate: string,
                     category: string,
                     team: string,
                     gender: string,
                     image:string) {
    var newPlayer = new Player(description, firstName, lastName, birthDate, category, team, gender, image);
    this.playerService.addPlayer(newPlayer);
    this.router.navigate(['']);
  }
}
