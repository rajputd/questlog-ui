import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestlogComponent } from './questlog/questlog.component';
import { QuestComponent } from './questlog/quest/quest.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestlogComponent,
    QuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
