import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'lht-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  @Output() overlayClick = new EventEmitter();

  @Input() expanded: boolean = false;

  constructor() { }

  onOverlayClick() {
    this.overlayClick.emit();
  }
}
