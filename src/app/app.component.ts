import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people/people.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular tabs</h1>
    <ngx-tabs>
      <ngx-tab tabTitle="People List">
        <app-people-list [people]="people"></app-people-list>
      </ngx-tab>
      <ngx-tab tabTitle="Tab 2">Tab 2 Content</ngx-tab>
    </ngx-tabs>

  `
})
export class AppComponent implements OnInit {
  people;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }
}
