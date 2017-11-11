/**
 * Simple component to abstract the editing of a person
 * object.
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  template: `
    <form [formGroup]="personForm" (ngSubmit)="onPersonFormSubmit()">
      <input type="hidden" formControlName="id">
      <div class="form-group">
        <label for="firstname">Firstname</label>
        <input type="text" class="form-control" id="firstname" placeholder="Firstname" formControlName="name">
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input type="text" class="form-control" id="surname" placeholder="Surname" formControlName="surname">
      </div>
      <div class="form-group">
        <label for="twitter">Twitter</label>
        <div class="input-group">
          <div class="input-group-addon">@</div>
          <input type="text" class="form-control" id="twitter" placeholder="Surname" formControlName="twitter">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  `
})
export class PersonEditComponent implements OnInit {
  personForm: FormGroup;

  @Input() person;
  @Output() savePerson = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      id: '',
      name: '',
      surname: '',
      twitter: ''
    });
  }

  ngOnInit() {
    this.personForm.setValue({
      id: this.person.id || -1,
      name: this.person.name || '',
      surname: this.person.surname || '',
      twitter: this.person.twitter || ''
    });
  }

  onPersonFormSubmit() {
    const dataModel = this.personForm.value;
    this.savePerson.emit(dataModel);
  }
}
