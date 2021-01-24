import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quest } from '../model/quest.model';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  QUESTS: Quest[] = [
    {
      id: 1,
      name: "code a ui",
      description: "Create a angular app to go with questlog backend",
      complete: true
    },
    {
      id: 2,
      name: "create a repository for ui project",
      description: "Go to github and create a project",
      complete: false
    },
    {
      id: 3,
      name: "integrate with the backend",
      description: "replace this mock with the actual backend",
      complete: false
    },
  ];

  constructor() { }

  getAllQuests(): Observable<Quest[]> {
    return of(this.QUESTS);
  }

  getQuest(id: number): Observable<Quest> {
    const found = this.QUESTS.find(quest => quest.id == id);
    if (found === undefined) {
      return of();
    }
    return of(found);
  }

  updateQuestionCompletion(id: number, newComplete: boolean) {
    const found = this.QUESTS.find(quest => quest.id == id);
    if (found === undefined) {
      return;
    }
    return found.complete = newComplete;
  }
}
