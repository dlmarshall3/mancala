import { Component, OnInit } from '@angular/core';
import { IPlayerStones } from './IPlayerStones.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public playerOneStones: IPlayerStones = {
    holeOne: 0,
    holeTwo: 0,
    holeThree: 0,
    holeFour: 0,
    holeFive: 0,
    holeSix: 0,
    mancala: 0,
  };

  public playerTwoStones: IPlayerStones = {
    holeOne: 0,
    holeTwo: 0,
    holeThree: 0,
    holeFour: 0,
    holeFive: 0,
    holeSix: 0,
    mancala: 0,
  };

  public ngOnInit() {

  }

  public onClick(event: any): void {
    console.log(event.target.id);
  }

  public onGameStart() {
    this.fillHoles(this.playerOneStones);
    this.fillHoles(this.playerTwoStones);
  }

  public onGameReset(){
    this.resetHoles(this.playerOneStones);
    this.resetHoles(this.playerTwoStones);
  }

  private fillHoles(stones: IPlayerStones): void {
    Object.keys(stones).forEach((key) => {
      const typedKey = key as keyof IPlayerStones;
      if (typedKey !== 'mancala') {
        stones[typedKey] = 4;
      }
    });
  }

  private resetHoles(stones: IPlayerStones): void {
    Object.keys(stones).forEach((key) => {
      const typedKey = key as keyof IPlayerStones;
      if (typedKey !== 'mancala') {
        stones[typedKey] = 0;
      }
    });
  }
}
