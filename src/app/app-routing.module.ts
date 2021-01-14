import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestComponent } from './questlog/quest/quest.component';
import { QuestlogComponent } from './questlog/questlog.component';

const routes: Routes = [
  { path: 'questlog', component: QuestlogComponent },
  { path: 'quest', component: QuestComponent },
  { path: '', redirectTo: '/questlog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
