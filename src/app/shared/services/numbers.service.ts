import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  _selectedNumbers: number[] = [];
  _maxNumber: number = 30;
  _shuffleTime: number = 50;
  //numberChanged:boolean = false;

  constructor(protected router: Router) { }

  /**
   * Return all the numbers picked till now 
   * @returns number 
   */
  getSelectedNumbers(): number[] {
    return this._selectedNumbers;
  }

  /**
   * Add a number to the list of picked numbers
   * @param num:number
   */
  appendNumber(): Boolean {
    let result:Boolean = false;
    let numTaken: number = Number((this._maxNumber * Math.random()).toFixed())
    
    if (numTaken === 0 ||
      this._alreadyInserted(numTaken) &&
      this._selectedNumbers.length !== this._maxNumber) {
       result = this.appendNumber()
    } else {
      if (this._selectedNumbers.length < this._maxNumber) {
        this._selectedNumbers.push(numTaken);
        this.router.navigate(['play', numTaken,this._shuffleTime])
        result = true;
      } else {
        result = false;
      }
    }

    return result;

  }

  /**
   * check if the number is already in the picked list.
   * @param auxNum:number 
   * @returns 
   */
  _alreadyInserted(auxNum: number): boolean {
    let aux: number[] = this._selectedNumbers.filter((value, index, array) => {
      return value === auxNum;
    })
    return aux.length > 0;
  }

  /**
   * reset the number picked list
   */
  reset(): void {
    this._selectedNumbers = [];
    this.router.navigate(['selected'])
  }

  /**
   * get the quantity of numbers in the listo of picked numbers
   * @returns 
   */
  getNumberQuantity(): number {
    return this._selectedNumbers.length;
  }

  /**
   * Set the total of number that can be inserted in the list
   * @param num: number
   */
  setMaxNumber(num: number): void {
    this._maxNumber = num;
  }

  /**
   * get the quantity of numbers allowed to insert into te picked list.
   * @returns 
   */
  getMaxNumber(): number {
    return this._maxNumber;
  }


  getShuffleTime(): number {
    return this._shuffleTime;
  }
  
  setShuffleTime(num:number): void {
    this._shuffleTime = num;
  }

  /*getNumberChanged(): boolean {
    return this.numberChanged;
  }

  setNumberChanged(val:boolean): void {
    this.numberChanged = true;
  }*/
}
