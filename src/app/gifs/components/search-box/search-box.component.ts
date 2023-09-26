import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="Buscar Gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `
})

export class SearchBoxComponent {
  public tags: any = [];
  constructor(private _gifService: GifService) { }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this._gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}