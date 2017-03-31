import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
  this.players = angularFire.database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: string) {
    return this.angularFire.database.object('/players/' + playerId)
  }

  addPlayer(playerToAdd: Player) {
    this.players.push(playerToAdd);
  }

  editPlayer(editedPlayer: Player, playerId: string) {
    const playerToEdit = this.getPlayerById(playerId);
    playerToEdit.update({
      firstName: editedPlayer.firstName,
      lastName: editedPlayer.lastName,
      birthDate: editedPlayer.birthDate,
      description: editedPlayer.description,
      category: editedPlayer.category,
      team: editedPlayer.team,
      gender: editedPlayer.gender,
      image: editedPlayer.image,
    });
  }

  deletePlayer(playerId: string) {
    const playerToDelete = this.getPlayerById(playerId);
    playerToDelete.remove();
  }
}
