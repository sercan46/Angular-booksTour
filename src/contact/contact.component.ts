import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Email from '../scripts/email'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.contactForm=fb.group({
      name:["",Validators.required],
      email:["",Validators.required],
      phone:["",Validators.required],
      message:["",Validators.required]
    })
   }


  ngOnInit(): void {
  }
  sendEmail(){
    Email.send({
      Host: "smtp.gmail.com",
      Username: "test@gmail.com",
      Password: "test",
      To: 'test@gmail.com',
      From: this.contactForm.get("email").value,
      Subject: this.contactForm.get("phone").value,
      Body: this.contactForm.get("message").value,
    })
      .then(function (message) {
        alert("Mail sent successfully")
      })
  
  }
}
