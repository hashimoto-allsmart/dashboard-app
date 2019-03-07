import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title = 'dropdown';

  @Input() icon: string;

  @Input() buttonStyle = 'btn-outline-dark';

  constructor() { }

  ngOnInit() {
  }

}
