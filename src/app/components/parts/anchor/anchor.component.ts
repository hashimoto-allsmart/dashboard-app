import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AncorItem } from 'src/app/models/parts/anchor';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnChanges {

  @Input() item = {} as AncorItem;

  class = [] as string[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // Iconが未指定の場合はno-iconクラスを追加
    if (!this.item.icon) { this.class.push('no-icon') }
    // クラスが指定されている場合は追加
    if (this.item.css) { this.class.push(this.item.css) }
  }
}
