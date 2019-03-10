import { Component, OnInit, Input } from '@angular/core';
import { verticalSlide } from 'src/app/animations/animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [verticalSlide('accordion', '200ms')],
})
export class AccordionComponent implements OnInit {

  showDetail = true;

  @Input() title = 'Accordion title';

  constructor() { }

  ngOnInit() {
  }

}
