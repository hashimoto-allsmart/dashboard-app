import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SideBarComponent } from './side-bar/side-bar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SideBarItemComponent } from './side-bar/side-bar-item/side-bar-item.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDropDownComponent } from './header/header-drop-down/header-drop-down.component';
import { SelectFormComponent } from './form/select-form/select-form.component';

@NgModule({
  declarations: [
    AccordionComponent,
    SideBarComponent,
    SideBarItemComponent,
    HeaderComponent,
    HeaderDropDownComponent,
    SelectFormComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    AccordionComponent,
    SideBarComponent,
    SideBarItemComponent,
    HeaderComponent,
    HeaderDropDownComponent,
    SelectFormComponent
  ]
})
export class PartsModule { }
