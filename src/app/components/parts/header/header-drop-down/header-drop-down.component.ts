import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-drop-down',
  templateUrl: './header-drop-down.component.html',
  styleUrls: ['./header-drop-down.component.scss']
})
export class HeaderDropDownComponent implements OnInit {

  @Input() title = 'anchor';

  @Input() icon = 'fa-dashboard';

  constructor() { }

  ngOnInit() {
  }

}
