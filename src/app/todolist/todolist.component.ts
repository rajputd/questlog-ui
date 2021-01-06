import { Component, OnInit } from '@angular/core';
import { Quest } from '../model/quest.model';
import { QuestService } from '../services/quest.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  quests: Quest[] = [];

  constructor(private questService: QuestService) { }

  ngOnInit(): void {
    this.questService.getAllQuests().subscribe(quests => this.quests = quests);
  }

}
