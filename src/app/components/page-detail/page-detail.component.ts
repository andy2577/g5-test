import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUsersService } from 'src/app/services/github-users.service';

import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit, OnDestroy {
  subToRoute: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private gitService: GithubUsersService
  ) { }

  ngOnInit() {
    this.subToRoute = this.route.params.pipe(
      map(param => param.login),
      switchMap(user => {
        return this.gitService.getUser(user);
      })
    ).subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    if (this.subToRoute) { this.subToRoute.unsubscribe(); }
  }
}
