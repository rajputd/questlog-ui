import { Component, Input, OnInit } from '@angular/core';
import { Quest } from 'src/app/model/quest.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() quest!: Quest;

  constructor() { }

  ngOnInit(): void {
  }

}
