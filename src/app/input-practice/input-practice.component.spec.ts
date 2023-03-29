import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { InputPracticeComponent } from './input-practice.component';

describe('InputPracticeComponent', () => {
  let component: InputPracticeComponent;
  let fixture: ComponentFixture<InputPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPracticeComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing for two way data binding
  it('Two way data binding test', (done) => {
    component.name = 'hhh';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      expect(element.value).toEqual('hhh');
      done();
    });
  });

  // Testing for *ngFor
  it('*ngFor testing', () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(
      By.css('#ngfor')
    );
    expect(element.length).toEqual(2);
  });
});
