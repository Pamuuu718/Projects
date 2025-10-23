import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log("Selected user with id " + id);
  }

}
