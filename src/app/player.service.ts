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
    return this.angularFire.database.object('/players/' + playerId);
  }

  addPlayer(playerToAdd: Player) {
    this.players.push(playerToAdd);
  }

  editPlayer(editedPlayer: Player, playerId: string) {
    const playerToEdit = this.getPlayerById(playerId);
    playerToEdit.update({
                        coaching: editedPlayer.coaching,
                        category: editedPlayer.category,
                        team: editedPlayer.team,
                        firstName: editedPlayer.firstName,
                        lastName: editedPlayer.lastName,
                        weight: editedPlayer.weight,
                        phone: editedPlayer.phone,
                        email: editedPlayer.email,
                        birthDate: editedPlayer.birthDate,
                        gender: editedPlayer.gender,
                        age: editedPlayer.age,
                        school: editedPlayer.school,
                        jerseyNumber: editedPlayer.jerseyNumber,
                        firstParentFirstName: editedPlayer.firstParentFirstName,
                        firstParentLastName: editedPlayer.firstParentLastName,
                        firstParentHomeNumber: editedPlayer.firstParentHomeNumber,
                        firstParentMobileNumber: editedPlayer.firstParentMobileNumber,
                        firstParentWorkNumber: editedPlayer.firstParentWorkNumber,
                        firstParentAddress: editedPlayer.firstParentAddress,
                        firstParentCity: editedPlayer.firstParentCity,
                        firstParentState: editedPlayer.firstParentState,
                        firstParentZip: editedPlayer.firstParentZip,
                        firstParentEmail: editedPlayer.firstParentEmail,
                        secondParentFirstName: editedPlayer.secondParentFirstName,
                        secondParentLastName: editedPlayer.secondParentLastName,
                        secondParentHomeNumber: editedPlayer.secondParentHomeNumber,
                        secondParentMobileNumber: editedPlayer.secondParentMobileNumber,
                        secondParentWorkNumber: editedPlayer.secondParentWorkNumber,
                        secondParentAddress: editedPlayer.secondParentAddress,
                        secondParentCity: editedPlayer.secondParentCity,
                        secondParentState: editedPlayer.secondParentState,
                        secondParentZip: editedPlayer.secondParentZip,
                        secondParentEmail: editedPlayer.secondParentEmail,
                        emergencyContactName: editedPlayer.emergencyContactName,
                        emergencyContactPhoneNumber: editedPlayer.emergencyContactPhoneNumber,
                        physicianName: editedPlayer.physicianName,
                        physicianPhoneNumber: editedPlayer.physicianPhoneNumber,
                        volunteerFirstChoice: editedPlayer.volunteerFirstChoice,
                        volunteerSecondChoice: editedPlayer.volunteerSecondChoice,
                        volunteerThirdChoice: editedPlayer.volunteerThirdChoice,
                        dateEntered: editedPlayer.dateEntered
    });
  }

  deletePlayer(playerId: string) {
    const playerToDelete = this.getPlayerById(playerId);
    playerToDelete.remove();
  }
}
