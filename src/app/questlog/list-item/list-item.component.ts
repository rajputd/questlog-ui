import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quest } from 'src/app/model/quest.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() quest!: Quest;
  @Output() completionEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCompletionChange(val: boolean) {
    this.completionEvent.emit(val);
  }

}
