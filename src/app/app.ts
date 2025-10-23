import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedUserId = 'u1';

  users = DUMMY_USERS;
   
  get selectedUser() {
   return this.users.find( user => user.id ===  this.selectedUserId )!;
  }
  onSelectUser(id: string) {
    console.log("Selected user with id " + id);
    this.selectedUserId = id;
  }

}
