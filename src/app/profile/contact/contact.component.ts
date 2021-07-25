import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value))
  }  // snotifyConfig = environment.snotifyConfig;
  // model: any = {};

  // constructor(
  //   private profile: ProfileService,
  //   private snotify: SnotifyService
  // ) { }

  // ngOnInit() {
  // }

  // contact() {
  //   this.profile.contactus(this.model).subscribe(data => {
  //     if (data.status) {
  //       this.snotify.success(data.message, 'Success', this.snotifyConfig);
  //     } else {
  //       this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
  //     }
  //   }, err => {
  //     this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
  //   });
  // }

}
