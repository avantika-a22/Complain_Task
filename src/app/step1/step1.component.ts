import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    HttpClientModule,
    MatButton,
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css',
})
export class Step1Component {
  @Input() increaseStep!: Function;
  @Input() setName!: Function;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('', [Validators.required]);
  options: string[] = [];
  filteredOptions: string[];
  constructor(private http: HttpClient) {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }
  buttonClick(): void {
    this.setName(this.myControl.value);
    this.increaseStep();
  }

  ngOnInit() {
    this.http
      .get<Object[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.options = data.map((d: any) => d.name);
      });
  }
}
