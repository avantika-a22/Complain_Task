import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Step1Component } from './step1/step1.component';
import { complainCategory, Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    Step1Component,
    Step2Component,
    Step3Component,
    CommonModule,
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'complainApp';
  step: number;
  name: string;
  category: complainCategory;

  constructor() {
    this.step = 1;
    this.name = '';
    this.category = complainCategory.OTHER;
  }
  public increaseStep = () => {
    this.step++;
  };
  public setName = (name: string) => {
    this.name = name;
  };
  public setCategory = (category: complainCategory) => {
    this.category = category;
  };
}
