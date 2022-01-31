import { Component } from '@angular/core';
import {Habit} from "../models";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public adding = false;

  public habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  public habits: Habit[] = [
    <Habit>{
      name: '15 Minute Walk',
      frequency: 'Daily',
      description:
        'This habit makes my kitchen look nice and makes my day better the next morning.',
    },
    <Habit>{
      name: 'Weed the Garden',
      frequency: 'Weekly',
      description:
        'The weeds get so out of hand if they wait any longer, and I like how nice our home looks with a clean lawn.',
    },
  ];

  public onSubmit() {
    this.habits.push(this.habitForm.value as Habit);
    this.adding = false;
  }
}
