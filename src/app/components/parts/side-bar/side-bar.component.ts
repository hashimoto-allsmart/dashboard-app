import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChildren(SideBarItemComponent) children: QueryList<SideBarItemComponent>;

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

  onTransitionEnd() {
    const width = document.getElementById('app-side-bar-inside').clientWidth;
    if (width === 50) {
      this.children.forEach(child => child.isVisible = false);
    }
  }
}
