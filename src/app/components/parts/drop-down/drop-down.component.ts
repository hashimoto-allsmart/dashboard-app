import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { openClose } from 'src/app/animations/animations';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  // animations: [openClose()],
})
export class DropDownComponent implements OnInit {

  @ViewChild('dropdown') dropDown: NgbDropdown;

  @Input() title = 'dropdown';

  @Input() icon: string;

  @Input() isOnMouseOpen = false;

  @Input() buttonStyle = 'btn-outline-dark';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver() {
    if (this.isOnMouseOpen) { this.dropDown.open(); }
  }

  onClick() {
    if (this.dropDown.isOpen()) {
      this.dropDown.close();
      return;
    }
    this.dropDown.open();
  }
}
