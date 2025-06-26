import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dashboard } from '../../dashboard/dashboard';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() pageName: String | undefined;
  @Output() viewCurrentPage: EventEmitter<any> = new EventEmitter();
  changePage(current: string) {
    this.viewCurrentPage.emit(current);
    console.log('call');
  }
}
