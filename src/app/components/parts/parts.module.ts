import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SideBarItemComponent } from './side-bar/side-bar-item/side-bar-item.component';

@NgModule({
  declarations: [
    AccordionComponent,
    SideBarComponent,
    SideBarItemComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    SideBarComponent,
    SideBarItemComponent,
  ]
})
export class PartsModule { }
