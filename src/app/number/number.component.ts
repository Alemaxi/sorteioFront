import { Component, OnInit, DoCheck } from '@angular/core';
import { transition,trigger,animate, state,style } from '@angular/animations';

import { ActivatedRoute } from '@angular/router';

let timeAnimation:string = '1000ms'

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  animations: [
    trigger('openClose',[
      transition('open <=> close', [
        style({
          opacity: 0,
        }),
        animate('1.8s ease-in-out')
      ]),
    ])
  ]
})
export class NumberComponent implements OnInit, DoCheck {

  sortNumber:number = 0 ;
  shuffling:boolean = false;
  transitionState: string = 'open';

  audio: any = '';

  constructor(
    protected route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.audio = document.getElementById('audioEfect');
    this.audio?.play();

    this.shuffling = true;
    this.sortNumber = Number(this.route.snapshot.paramMap.get('number'));
    let paramShuffle = 20000 *(Number(this.route.snapshot.paramMap.get('shuffleTime'))/100);

    this.startShufflingAnimt(paramShuffle);
  }

  ngDoCheck() {
    let paramNumber: Number = Number(this.route.snapshot.paramMap.get('number'));
    let paramShuffle: Number = 20000 *(Number(this.route.snapshot.paramMap.get('shuffleTime'))/100);

    
    if(paramNumber!==this.sortNumber) {
      this.transitionState = this.transitionState == 'open'? 'close':'open';
      this.shuffling=true;
      this.sortNumber = paramNumber as number;
      this.audio.play();

      this.startShufflingAnimt(paramShuffle);
    }
  }


  startShufflingAnimt(paramShuffle:Number) {
    setTimeout(() => {
      this.shuffling = false;
      this.transitionState = this.transitionState === 'open'? 'close':'open';
    }, paramShuffle as number);
  }

}
