import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestlogComponent } from './questlog/questlog.component';
import { QuestComponent } from './questlog/quest/quest.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ListItemComponent } from './questlog/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestlogComponent,
    QuestComponent,
    TruncatePipe,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
