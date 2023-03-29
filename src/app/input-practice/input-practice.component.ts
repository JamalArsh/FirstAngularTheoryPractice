import { Component } from '@angular/core';

@Component({
  selector: 'app-input-practice',
  templateUrl: './input-practice.component.html',
  styleUrls: ['./input-practice.component.css'],
})
export class InputPracticeComponent {
  name: string = '';

  nameList: string[] = ['Mohammed', 'Arshath'];

  buttonClick() {
    if (this.name) this.nameList.push(this.name);
  }
  buttonClearList() {
    this.nameList = [];
  }

  buttonClear() {
    this.name = '';
  }
}
