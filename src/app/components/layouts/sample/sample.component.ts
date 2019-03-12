import { HeaderRow, BodyRow } from './../../../models/parts/table/table';
import { PagerItem } from 'src/app/models/parts/table/table';
import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/parts/table/table.service';
import { HeaderItem, ColumnProperty } from 'src/app/models/parts/table/properties';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  headerRow: HeaderRow;
  dataRows: BodyRow[];

  constructor(private tableService: TableService) { }

  rows = [
    { aaa: { bbb: { ccc: [{ ddd: { eee: 'eee' } }, { ddd: { eee: 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' } }] }, fff: 1 } },
    { aaa: { bbb: { ccc: [{ ddd: { eee: 'eee' } }, { ddd: { eee: 'ddd' } }] }, fff: 1 } },
    { aaa: { bbb: { ccc: [{ ddd: { eee: 'eee' } }, { ddd: { eee: 'ddd' } }] }, fff: 1 } },
  ];
  items = [
    { itemCode: 'item1', value: 'item1' },
    { itemCode: 'item2', value: 'item2' },
    { itemCode: 'item3', value: 'item3' }
  ] as HeaderItem[];
  properties = [
    { path: 'aaa.fff', itemCode: 'item1', isFixed: true },
    { path: 'aaa.bbb.ccc:1.ddd.eee', itemCode: 'item2', isFixed: true },
    { path: 'aaa.bbb.ccc:[].ddd.eee', itemCode: 'item3', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
    { path: 'aaa.bbb.ccc:0.ddd.eee', itemCode: 'item2', isFixed: false },
  ] as ColumnProperty[]

  pagerItem = {
    total: 100,
    from: 1,
    count: 10,
    displayCount: [10, 50, 100]
  } as PagerItem;

  ngOnInit() {
    this.headerRow = this.tableService.createHeaderColumns(this.properties, this.items);
    this.dataRows = this.tableService.createBodyColumns(this.properties, this.rows);
  }
}
