import { Component, Input, OnInit } from '@angular/core';
import { Quest } from 'src/app/model/quest.model';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {
  @Input() quest!: Quest;

  constructor() { }

  ngOnInit(): void {
  }

}
