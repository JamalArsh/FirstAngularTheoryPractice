import { Component } from '@angular/core';
import { People } from './people';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css'],
})
export class PeopleCardComponent {
  peoples: People[] = [
    new People(1, 'AAA', 'male'),
    new People(2, 'BBB', 'female'),
    new People(3, 'CCC', 'male'),
    new People(4, 'DDD', 'female'),
    new People(5, 'EEE', 'male'),
    new People(6, 'FFF', 'female'),
  ];
}
