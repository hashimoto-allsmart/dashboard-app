import { Component, OnInit, Input } from '@angular/core';
import { openClose } from 'src/app/animations/animations';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss'],
  animations: [openClose()],
})
export class SelectFormComponent implements OnInit {

  @Input() title = 'select-form';

  @Input() items = [
    { name: 'aaa', id: '1' },
  ];

  value: string;

  ngOnInit() {
  }
}
