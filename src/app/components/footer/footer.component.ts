import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  flag:boolean = true;
  spot1:string = '';

  constructor( public dataService:DataService ) { 

    this.spot1 = this.dataService.spot1;
  }

  ngOnInit() {
  }

}
