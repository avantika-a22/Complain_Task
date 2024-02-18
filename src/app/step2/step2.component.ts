import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

export enum complainCategory {
  PRODUCT_OR_SERVICE_QUALITY = 'Product or service quality',
  UNAVALIABLE_PRODUCT = 'Unavaliable or out-of-stock product',
  DELIVERY = 'Delivery',
  LONG_WAIT_TIME = 'Long wait time',
  OTHER = 'Other',
}
@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css',
})
export class Step2Component {
  @Input() increaseStep!: Function;
  @Input() setCategory!: Function;
  selectedCategory: string;
  complainCategoryList: string[] = Object.values(complainCategory);
  radioButtonClick(): void {
    this.setCategory(this.selectedCategory);
    setTimeout(() => this.increaseStep(), 200);
  }
  constructor() {
    this.selectedCategory = '';
  }
}
