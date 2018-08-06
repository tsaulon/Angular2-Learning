import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  show: boolean;
  timestamps: Array<Date>;

  constructor() { 
    this.show = false;
    this.timestamps = [];
  }

  ngOnInit() {
  }

  onDetailsClick(): void{
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2000)
    this.timestamps.push(new Date())
    console.log(this.timestamps)
  }

}
