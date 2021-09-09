import { Component, OnInit } from '@angular/core';

import { NumbersService } from '../shared/services/numbers.service';

@Component({
  selector: 'app-selected-numbers',
  templateUrl: './selected-numbers.component.html',
  styleUrls: ['./selected-numbers.component.scss']
})
export class SelectedNumbersComponent implements OnInit {

  constructor(public numService:NumbersService) {

  }

  ngOnInit(): void {
  }

}
