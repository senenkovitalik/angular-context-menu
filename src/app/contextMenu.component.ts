import { Component, Input } from '@angular/core';

@Component({
  selector: 'context-menu',
  templateUrl: `./contextMenu.html`,
  styleUrls: [`./contextMenu.css`]
})
export class ContextMenuComponent  {
  private isOpen = false;
  private top = 0;
  private left = 0;

  public open($event) {
    this.top = $event.clientY,
    this.left = $event.clientX
    this.isOpen = true;
  }

  public close() {
    this.isOpen = false;
  }
}
