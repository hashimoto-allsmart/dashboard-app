import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('headerDrop') dropDown: NgbDropdown;

  title = 'Title';

  userName = 'サンプル太郎';

  userProfile = { key: 'user', title: 'User Profile', icon: 'fa-user' };
  app1 = { key: 'app1', title: 'App1', icon: 'fa-users' };
  app2 = { key: 'app2', title: 'App2' };
  app3 = { key: 'app3', title: 'App3', icon: 'fa-info-circle' };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick() {
    if (this.dropDown.isOpen()) {
      this.dropDown.close();
    } else {
      this.dropDown.open();
    }
  }

  onClickHome() {
    this.router.navigate(['/']);
  }
}
