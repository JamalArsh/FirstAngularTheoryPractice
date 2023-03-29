import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { InputPracticeComponent } from './input-practice/input-practice.component';

@NgModule({
  declarations: [AppComponent, PeopleCardComponent, InputPracticeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
