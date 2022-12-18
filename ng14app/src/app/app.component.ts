import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng14app';

  myForm: FormGroup<{
    firstName: FormControl<string>,
    lastName: FormControl<string>,
    age: FormControl<any>
  }>;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.nonNullable.group({
      firstName: '',
      lastName: '',
      age: ''
    })
  }

  ngOnInit() {
    //this.myForm.value.
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
