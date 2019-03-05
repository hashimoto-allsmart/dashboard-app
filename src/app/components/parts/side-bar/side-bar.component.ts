import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChildren(SideBarItemComponent) children: QueryList<SideBarItemComponent>;

  isOpen = false;

  isVisible = false;

  isHovering = true;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isVisible = !this.isVisible;
    this.isHovering = (this.isVisible) ? false : true;
  }

  onClose() {
    this.isOpen = false;
    this.children.forEach(child => child.isVisible = false);
  }
}
