import { Component, Input } from '@angular/core';

@Component({
  selector: 'profileInfo',
  templateUrl: './profileInfo.component.html',
  styleUrl: '././profileInfo.component.scss'
})
export class ProfileInfo {
  @Input() userId: any;

}