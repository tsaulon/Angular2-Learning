import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string = "";
  canCreate: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onInputTextUpdate(){
    this.canCreate = (this.username.length > 0) ? true : false;
  }

  onUserCreation(event: any){
    this.username = "";
  }

}
