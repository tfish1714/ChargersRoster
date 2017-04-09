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
  public model: Player = new Player();

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService) { }
  playerId: string;
  playerToEdit;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });

    this.playerToEdit = this.playerService.getPlayerById(this.playerId)
    .subscribe(
      res =>
      { this.model = res});
  }
  goBack() {
    this.router.navigate(['edit-player']);
  }
  saveEdit(){
    this.playerService.editPlayer(this.model, this.playerId);
    this.router.navigate(['edit-player']);
  }
  deletePlayer() {
    if(confirm('Are you sure you want to delete this player?')) {
      this.playerService.deletePlayer(this.playerId);
      this.router.navigate(['edit-player']);
    }
  }
}
