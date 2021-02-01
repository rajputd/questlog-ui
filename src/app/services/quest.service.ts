import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quest } from '../model/quest.model';
import { HttpClient } from '@angular/common/http';
import { Api } from './api.const';


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

  constructor(private http: HttpClient) { }

  getAllQuests(): Observable<Quest[]> {
    return this.http.get<Quest[]>(Api.QUESTS);
  }

  getQuest(id: number): Observable<Quest> {
    const found = this.QUESTS.find(quest => quest.id == id);
    if (found === undefined) {
      return of();
    }
    return of(found);
  }

  updateQuest(quest: Quest) {
    const found = this.QUESTS.find(toUpdate => quest.id == toUpdate.id);
    if (found == undefined) {
      return;
    }
    const foundIndex = this.QUESTS.indexOf(found);
    this.QUESTS[foundIndex] = quest;
  }
}
