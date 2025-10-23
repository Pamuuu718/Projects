import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() avatar!: string ;
  @Input() name!: string ;

  get imagepath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
  }

}
