import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContextMenuComponent } from './contextMenu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContextMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
