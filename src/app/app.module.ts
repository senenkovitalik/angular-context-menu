import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuItemComponent } from './contextMenuItem/contextMenuItem.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContextMenuComponent, ContextMenuItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
