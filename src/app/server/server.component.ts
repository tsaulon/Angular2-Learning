import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class ServerComponent{
    foo: string = "Server Component was here."
}