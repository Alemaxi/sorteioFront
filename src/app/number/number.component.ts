import { Component, OnInit, DoCheck } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit, DoCheck {

  sortNumber:number = 0 ;
  shuffling:boolean = false;

  constructor(
    protected route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.shuffling = true;
    this.sortNumber = Number(this.route.snapshot.paramMap.get('number'));
    let paramShuffle = 20000 *(Number(this.route.snapshot.paramMap.get('shuffleTime'))/100);
    setTimeout(() => {
      this.shuffling = false;
    }, paramShuffle as number);
  }

  ngDoCheck() {
    let paramNumber: Number = Number(this.route.snapshot.paramMap.get('number'));
    let paramShuffle: Number = 20000 *(Number(this.route.snapshot.paramMap.get('shuffleTime'))/100);
    if(paramNumber!==this.sortNumber) {
      this.shuffling=true;
      this.sortNumber = paramNumber as number;
      setTimeout(() => {
        this.shuffling = false;
      }, paramShuffle as number);
    }
  }

}
