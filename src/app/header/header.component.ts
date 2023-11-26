import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  hideActionMenu=false;
  ngOnInit(): void {
   }

   settingsMenuToggle(){
    this.hideActionMenu =!this.hideActionMenu;
   }
}
