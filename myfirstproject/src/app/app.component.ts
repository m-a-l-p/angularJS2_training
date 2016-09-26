import { Component } from '@angular/core';
import { User } from './user';

const USERS = [
  new User('Sakaki','shio',29,80,190),
  new User('Akisame','koetsuji',32,82,192),
  new User('Shigure','kousaka',26,50,186),
  new User('Apachai','hopachai',28,85,200),
  new User('Ma','kensei',32,60,175)
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'This is my title';
  selectedUser: User;
  users: Array<User>;
  isEditMode: boolean = false;

  constructor() {
    this.selectedUser = USERS[0];
    this.users = USERS;
  }

  onCheckAge() {
    if(this.selectedUser.isOld())
      alert('Too Old -_-"');
    else
      alert('Still young ^_^');
  }

  onCheckBMI() {
    alert('Your BMI is ' +this.selectedUser.getBMI());
  }

  getUsers() {
    console.log('..... START getUsers() .....');
    console.log(this.users);
    return this.users;
  }

  deleteUser(index: number) {
    this.users.splice(index,1);
  }

  addUser() {
    let tempUser: any = {};
    tempUser.name = prompt("name: ");
    tempUser.password = prompt("password: ");
    tempUser.age = prompt("age: ");
    tempUser.weight = prompt("weight: ");
    tempUser.height = prompt("height: ");
    this.users.push(new User(
      tempUser.name,
      tempUser.password,
      tempUser.age,
      tempUser.weight,
      tempUser.height
    ));
  }
}
