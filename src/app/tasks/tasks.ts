import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true}) name!: string;
  @Output() selectUser = new EventEmitter<string>();

  onSelectUser() {
    this.selectUser.emit(this.name);
  }

}
