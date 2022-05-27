import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTACT } from './model/contact';
import { EDUCATION } from './model/education';
import { FULL_NAME } from './model/fullname';
import { INTEREST } from './model/interest';
import { PROJECT } from './model/project';
import { SKILLS } from './model/skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  INFO = 'text-bg-secondary';
  SECONDARY = 'text-bg-info';

  contact$!: Observable<any>;
  fullName$!: Observable<any>;
  interest$!: Observable<any>;
  project$!: Observable<any>;
  education$!: Observable<any>;
  skills$!: Observable<any>;


  ngOnInit() {
    this.fullName$ = of(FULL_NAME);
    this.contact$ = of(CONTACT);
    this.education$ = of(EDUCATION);
    this.interest$ = of(INTEREST);
    this.project$ = of(PROJECT);
    this.skills$ = of(SKILLS);
  }
}


