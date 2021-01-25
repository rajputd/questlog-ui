import { Component, OnInit } from '@angular/core';
import { Quest } from '../model/quest.model';
import { QuestService } from '../services/quest.service';

@Component({
  selector: 'app-questlog',
  templateUrl: './questlog.component.html',
  styleUrls: ['./questlog.component.scss']
})
export class QuestlogComponent implements OnInit {
  quests: Quest[] = [];

  constructor(private questService: QuestService) { }

  ngOnInit(): void {
    this.questService.getAllQuests().subscribe(quests => this.quests = quests);
  }

  updateCompletionStatus(id: number, newVal: boolean) {
    const found = this.quests.find(quest => quest.id == id);
    if (found == undefined) {
      throw new Error("Could not find quest in list with id = " + id);
    }
    found.complete = newVal;
    this.questService.updateQuest(found);
  }

}
