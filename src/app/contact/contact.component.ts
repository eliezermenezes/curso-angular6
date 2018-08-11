import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public ufs = ['AM', 'AC', 'AP', 'SP'];
  public contact: Contact;

  constructor() { }

  ngOnInit() {
    this.contact = new Contact();
  }

  onSave() {
    console.log(this.contact);
  }

}
