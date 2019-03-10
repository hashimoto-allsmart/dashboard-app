import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SideBarItem } from 'src/app/models/parts/side-bar';
import { verticalSlide } from 'src/app/animations/animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [verticalSlide('accordion', '200ms')],
})
export class SideBarComponent implements OnInit {

  isVisible = false;

  isItemVisible: boolean[];

  isHovering = true;

  items = [
    { key: 'anchor1', title: 'ダッシュボード', css: 'light', icon: 'fa-dashboard' },
    { key: 'anchor2', title: '管理', css: 'light', icon: 'fa-dashboard', items: [{ key: 'anchor1', title: '登録', css: 'light' }] }
  ] as SideBarItem[];

  constructor() {
  }

  ngOnInit() {
    this.isItemVisible = this.items.map(_ => false);
  }

  onClick() {
    this.isVisible = !this.isVisible;
    this.isHovering = (this.isVisible) ? false : true;
  }

  onTransitionEnd() {
    const width = document.getElementById('app-side-bar-inside').clientWidth;
    if (width === 50) {
      this.isItemVisible = this.isItemVisible.map(_ => false);
    }
  }

  onLinkClick(event: any) {
    // console.dir(event);
  }
}
