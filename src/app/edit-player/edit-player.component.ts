import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [ PlayerService ]
})
export class EditPlayerComponent implements OnInit {
  players;
  filterCategory: string = "allPlayers";
  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }
  onChange(category) {
    this.filterCategory = category;
  }
  toEditPlayer(playerToEdit) {
    this.router.navigate(['edit-player', playerToEdit.$key]);
  }

}
