import { Component, Input, OnInit } from '@angular/core';
import { Quest } from 'src/app/model/quest.model';
import { QuestService } from 'src/app/services/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {
  quest?: Quest;

  constructor(private questService: QuestService) { }

  ngOnInit(): void {
    this.questService.getQuest(0).subscribe(quest => this.quest = quest);
  }

}
