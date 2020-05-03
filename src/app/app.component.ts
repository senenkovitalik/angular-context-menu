import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('contextMenu') contextMenu;
  private isOpened = false;

  private toggleContextMenu($event: MouseEvent) {
    if (this.isOpened) {
      this.contextMenu.close();
      this.isOpened = false;
    } else {
      this.contextMenu.open($event);
      this.isOpened = true;
    }
  }

  private showItem() {
    console.log('Show Item');
  }

  private changeItemState() {
    console.log('Collapse/Expand Item');
  }
}
