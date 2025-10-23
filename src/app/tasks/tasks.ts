import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() name?: string;

}
