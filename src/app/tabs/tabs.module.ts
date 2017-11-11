import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { DynamicTabAnchorDirective } from './dynamic-tab-anchor.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabComponent, DynamicTabAnchorDirective],
  exports: [TabsComponent, TabComponent],
  entryComponents: [TabComponent]
})
export class TabsModule {}
