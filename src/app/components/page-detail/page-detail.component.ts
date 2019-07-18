import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {
  subToRoute: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subToRoute = this.route.params.subscribe((param) => {
      console.log(param);
    });
  }

}
