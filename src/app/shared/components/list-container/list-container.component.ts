import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent {
  @Input() items: Array<any> = [];
  @Input() isPost: boolean = false;

  trackById(index: number, item: any) {
    return item.id;
  }
}
