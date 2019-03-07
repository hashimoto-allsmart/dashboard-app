import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {

  @Input() title = 'anchor';

  @Input() icon: string;

  @Input() isLight = false;

  noIcon = true;

  constructor() { }

  ngOnInit() {
  }
}
