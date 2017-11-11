import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TabsModule, PeopleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
