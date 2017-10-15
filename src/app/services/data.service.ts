import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  users = [
    'john',
    'mary',
    'lucy',
    'paul',
    'mark',
    'kate'
  ];

  spot1:string = 'default';

  constructor() { }

}
