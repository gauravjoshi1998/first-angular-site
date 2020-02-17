import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  name: string;
  email: string;
  message: string;
  ngOnInit(): void {
  }
  submitForm(){
    const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(message);
  }

}
