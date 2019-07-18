import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { GithubUsersService } from 'src/app/services/github-users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Output() searchResults: EventEmitter<any> = new EventEmitter();
  search: FormGroup;
  subToSearch: Subscription;
  totalResults: any;

  constructor(
    private gitService: GithubUsersService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.search = this.fb.group({
      query: ['', []]
    });
  }

  ngOnDestroy() {
    if (this.subToSearch) { this.subToSearch.unsubscribe(); }
  }

  searchUsers(value) {
    const {query} = value;
    this.subToSearch = this.gitService.getUsers(query)
                          .subscribe((result: any) => {
                            const {total_count, items, incomplete_results} = result;
                            this.totalResults = total_count;
                            this.searchResults.emit(items);
                          },
                            (err) => console.error(err)
                          );
  }
}
