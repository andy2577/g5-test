import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  test: any;

  constructor(
    private gitService: GithubUsersService
  ) { }

  ngOnInit() {
    this.test = this.gitService.getUsers('s').subscribe((results) => {
      console.log(results);
    });
  }

}
