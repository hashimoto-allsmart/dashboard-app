import { Component, OnInit, Input } from '@angular/core';
import { verticalSlide } from 'src/app/animations/animations';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss'],
  animations: verticalSlide('accordion', '300ms'),
})
export class SideBarItemComponent implements OnInit {

  @Input() isVisible = false;

  @Input() title = 'Dashboard';

  @Input() items = ['link1', 'link2'];

  constructor() {
  }

  ngOnInit() {
  }
}
