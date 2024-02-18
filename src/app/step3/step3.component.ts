import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { complainCategory } from '../step2/step2.component';
@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css',
})
export class Step3Component {
  @Input() complainCategory!: complainCategory;
  currentDate!: Date;
  constructor() {
    this.currentDate = new Date();
  }
}
