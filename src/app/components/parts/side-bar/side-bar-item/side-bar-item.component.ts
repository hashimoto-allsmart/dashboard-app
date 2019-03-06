import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent implements OnInit {

  @Input() isVisible = false;

  @Input() title = 'Dashboard';

  @Input() items = ['link1', 'link2'];

  itemHeight = '0';

  private el: HTMLElement;

  constructor(element: ElementRef) {
    this.el = element.nativeElement;
  }

  ngOnInit() {
  }

  onAnimationStart() {
    this.itemHeight = '40px';
  }

  onAnimationEnd(index: number) {
    this.itemHeight = (this.isLinkItemVisible(index)) ? '40px' : '0';
  }

  private isLinkItemVisible(index: number) {
    return Array.from(this.el.getElementsByClassName('link-item')[index].classList).filter(i => i === 'visible').length !== 0;
  }
}
