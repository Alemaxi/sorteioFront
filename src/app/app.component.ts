import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common/';

//import
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SettingsComponent } from './settings/settings.component';
import { NumbersService } from './shared/services/numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front';

  constructor(
    protected dialog: MatDialog,
    public num: NumbersService,
    protected router: Router,
    protected location: Location,
    protected snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
  }

  takeANumber() {
    
      if(!this.num.appendNumber()) { this.limitHit() }
    
  }

  openDialog() {
    this.dialog.open(SettingsComponent)
  }

  limitHit() {
    this.snackBar.open('Limite máximo de numeros atingido','Ok!')
  }
  
}
