import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Quest } from 'src/app/model/quest.model';
import { QuestService } from 'src/app/services/quest.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {
  quest!: Quest;

  constructor(
    private questService: QuestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.questService.getQuest(+params['id']).subscribe(quest => this.quest = quest));
    //this.questService.getQuest(0).subscribe(quest => this.quest = quest);
  }

}
