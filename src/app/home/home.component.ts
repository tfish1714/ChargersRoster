import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ PlayerService ]
})
export class HomeComponent implements OnInit {

  players;
  selectedCategory: string = "allPlayers";

  onChange(optionFromMenu) {
    this.selectedCategory = optionFromMenu;
  }

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }
  toPlayerDetail(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer.$key])
  }

}
