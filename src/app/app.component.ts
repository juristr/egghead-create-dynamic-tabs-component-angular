import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular tabs</h1>
    <ngx-tabs>
      <ngx-tab [tabTitle]="'Tab 1'">Tab 1 Content</ngx-tab>
      <ngx-tab tabTitle="Tab 2">Tab 2 Content</ngx-tab>
    </ngx-tabs>
  `
})
export class AppComponent {
  constructor() {}
}
