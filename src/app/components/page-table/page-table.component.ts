import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {
  users: any;

  constructor() { }

  ngOnInit() {
  }

  onSearchResults(items) {
    this.users = items;
  }

}
