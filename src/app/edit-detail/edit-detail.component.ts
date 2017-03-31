import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';
import { ActivatedRoute, Params, Router  } from '@angular/router';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css'],
  providers: [ PlayerService ]
})
export class EditDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService) { }
  playerId: string;
  playerToEdit;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.playerToEdit = this.playerService.getPlayerById(this.playerId);
  }
  goBack() {
    this.router.navigate(['edit-player']);
  }
  saveEdit(firstName:string,
           lastName:string,
           birthDate:string,
           description:string,
           category:string,
           team: string,
           gender: string,
           image:string) {
    var editedPlayer = new Player(description, firstName, lastName, birthDate, category, team, gender, image);
    this.playerService.editPlayer(editedPlayer, this.playerId);
    this.router.navigate(['edit-player']);
  }
  deletePlayer() {
    if(confirm("Are you sure you want to delete this player?")) {
      this.playerService.deletePlayer(this.playerId);
      this.router.navigate(['edit-player']);
    }
  }
}
