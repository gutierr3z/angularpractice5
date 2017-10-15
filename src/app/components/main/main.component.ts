import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users:string[] = [];
  spot1:string = '';

  constructor( public dataService:DataService ) { 

    this.users = this.dataService.users;
    this.spot1 = this.dataService.spot1;
    this.spot1 = 'red';
    this.dataService.spot1 = 'blue';
  }

  ngOnInit() {
  }

}
