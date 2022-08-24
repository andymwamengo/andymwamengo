import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact, CONTACT } from './model/contact';
import { EDUCATION, Education } from './model/education';
import { FULL_NAME, FullName } from './model/fullname';
import { INTEREST, Interest } from './model/interest';
import { PROJECT, Project } from './model/project';
import { SKILLS, Skills } from './model/skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  contact$!: Observable<Contact>;
  fullName$!: Observable<FullName>;
  interest$!: Observable<Interest>;
  project$!: Observable<Project>;
  education$!: Observable<Education>;
  skills$!: Observable<Skills>;


  ngOnInit() {
    this.fullName$ = of(FULL_NAME);
    this.contact$ = of(CONTACT);
    this.education$ = of(EDUCATION);
    this.interest$ = of(INTEREST);
    this.project$ = of(PROJECT);
    this.skills$ = of(SKILLS);
  }
}


