import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-page-blocks',
  templateUrl: './page-blocks.component.html',
  styleUrls: ['./page-blocks.component.scss']
})
export class PageBlocksComponent implements OnInit {
  users: any;

  constructor() { }

  ngOnInit() {
  }

  onSearchResults(items) {
    console.log('this is page -------- , ', items);
    this.users = items;
  }

}
