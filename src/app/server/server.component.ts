import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class ServerComponent{
    name: string = "North America"
    serverID: number = 10
    serverStatus: boolean = false;

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? true : false
    }
    getServerStatus(): string{
        return this.serverStatus ? "online" : "offline"
    }

    getColor(): string{
        return this.serverStatus ? "lightgreen" : "red"
    }
}