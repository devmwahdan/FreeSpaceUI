import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'right-side',
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSide {
    constructor( private router: Router){
}
EventCreation(){
    debugger
     this.router.navigateByUrl('/Event');
   }
}