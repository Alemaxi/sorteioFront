import { Component, OnInit } from '@angular/core';

import { NumbersService } from '../shared/services/numbers.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  maxNumber: number = 30;
  shuffleTime: number = 50;

  constructor(public numService: NumbersService) { }

  ngOnInit(): void {
    this.maxNumber = this.numService.getMaxNumber();
    this.shuffleTime = this.numService.getShuffleTime();
  }

  updateValues(): void {
    this.numService.setMaxNumber(Number(this.maxNumber));
    this.numService.setShuffleTime(Number(this.shuffleTime));
  }

}
