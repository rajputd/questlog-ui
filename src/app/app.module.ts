import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestlogComponent } from './questlog/questlog.component';
import { QuestComponent } from './questlog/quest/quest.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ListItemComponent } from './questlog/list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuestlogComponent,
    QuestComponent,
    TruncatePipe,
    ListItemComponent,
    LayoutContainerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
