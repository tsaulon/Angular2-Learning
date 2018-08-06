import { Component, OnInit } from '@angular/core';

@Component({
  //  app-servers identifies by HTML tag. 
  //  [app-server] identifies by attribute. (e.g. <div app-server></div>)
  selector: 'app-servers',
  templateUrl: './servers.component.html',  // template: '<app-server><app-server>' ...used for literal HTML
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName: string = "default server";

  constructor() { 
    setTimeout(() => { 
      this.allowNewServer = !this.allowNewServer;
    }, 2000)
  }

  ngOnInit() {
  }

  onServerCreation(): void{
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  onUpdateServerName(event: any): void{
    this.serverName = event.target.value;
  }

}
