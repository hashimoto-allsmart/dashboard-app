import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent implements OnInit {

  title = 'select';

  value: any;

  items = [true, 'Two', 3];

  constructor() { }

  ngOnInit() {
  }

}
