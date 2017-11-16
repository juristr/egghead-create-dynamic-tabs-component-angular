import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TabComponent } from './tab.component';

import { DynamicTabAnchorDirective } from './dynamic-tab-anchor.directive';

@Component({
  selector: 'ngx-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.tabTitle}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    <ng-template appDynamicTabAnchor #container></ng-template>
  `
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild(DynamicTabAnchorDirective)
  dynamicTabPlaceholder: DynamicTabAnchorDirective;
  // @ViewChild('container', { read: ViewContainerRef }) placeholder;

  openTab() {
    console.log(this.dynamicTabPlaceholder.viewContainer);
  }

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
