import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private _gifsService: GifService) { }

  get tags(): string[] {
    return this._gifsService.tagHistory;
  }

  searchTag(tag: string): void {
    this._gifsService.searchTag(tag);
  }
}
