import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { SideBarComponent } from './side-bar/side-bar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SideBarItemComponent } from './side-bar/side-bar-item/side-bar-item.component';
import { HeaderComponent } from './header/header.component';
import { SelectFormComponent } from './form/select-form/select-form.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { AnchorComponent } from './anchor/anchor.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AccordionComponent,
    SideBarComponent,
    SideBarItemComponent,
    HeaderComponent,
    SelectFormComponent,
    DropDownComponent,
    AnchorComponent,
    ButtonComponent,
    TableComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [
    AccordionComponent,
    SideBarComponent,
    SideBarItemComponent,
    HeaderComponent,
    SelectFormComponent,
    DropDownComponent,
    AnchorComponent,
    ButtonComponent,
    TableComponent
  ]
})
export class PartsModule { }
