import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app-4';
  name: string = 'Arshath';
  para: string = 'this is a paragraph';
  hide: boolean = false;
  twoway: string = '';

  testFunction(): void {
    console.log('Test function called');
    this.hide = !this.hide;
  }
}
