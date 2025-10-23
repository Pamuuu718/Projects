import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';

// type User = {
//     id: string;
//     avatar: string;
//     name: string
// };

export interface User {
    id: string;
    avatar: string;
    name: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true}) user!: User;

  @Output() select = new EventEmitter();

  get imagepath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
