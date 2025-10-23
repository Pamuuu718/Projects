import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true}) id!: string;
  @Input({ required: true}) avatar!: string ;
  @Input({ required: true}) name!: string ;
  @Output() select = new EventEmitter();

  get imagepath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

}
