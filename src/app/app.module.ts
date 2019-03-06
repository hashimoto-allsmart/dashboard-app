import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartsModule } from './components/parts/parts.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderDropDownComponent } from './components/header/header-drop-down/header-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
