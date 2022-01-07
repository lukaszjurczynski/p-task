import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendees-list',
  templateUrl: './attendees-list.component.html',
  styleUrls: ['./attendees-list.component.scss']
})
export class AttendeesListComponent implements OnInit {

  headers = ["First Name", "Last Name", "Email", "Telephone", "Company", "Role"];
  users = [
    {
      "firstName" : "Yuliana",
      "lastName" : "Morana",
      "email" : "ym@pega.com",
      "phone" : "+49123412341234",
      "company" : "Pega Clinet",
      "role": "Sales manager"
    },
    {
      "firstName" : "Frej",
      "lastName" : "Meline",
      "email" : "fm@pega.com",
      "phone" : "+49123412341234",
      "company" : "Other Clinet",
      "role": "Sales manager"
    },
    {
      "firstName" : "Beren",
      "lastName" : "Faiza",
      "email" : "bf@pega.com",
      "phone" : "+49123412341234",
      "company" : "Governement Inst",
      "role": "Sales manager"
    },
    {
      "firstName" : "Bernadita",
      "lastName" : "Hohmejer",
      "email" : "bh@pega.com",
      "phone" : "+49123412341234",
      "company" : "Acme inc",
      "role": "Sales manager"
    },
    {
      "firstName" : "Lyuben",
      "lastName" : "Charon",
      "email" : "lc@pega.com",
      "phone" : "+49123412341234",
      "company" : "Pega Clinet",
      "role": "Solution specialist"
    },
    {
      "firstName" : "Khachtur",
      "lastName" : "Kiana",
      "email" : "kk@pega.com",
      "phone" : "+49123412341234",
      "company" : "Pega Headquarers",
      "role": "Developer"
    },
    {
      "firstName" : "Chandana",
      "lastName" : "Alba",
      "email" : "ca@pega.com",
      "phone" : "+49123412341234",
      "company" : "Manufacture",
      "role": "Manager"
    },
    {
      "firstName" : "Tushar",
      "lastName" : "Zaal",
      "email" : "tz@pega.com",
      "phone" : "+49123412341234",
      "company" : "Pega partner",
      "role": "Sales executive"
    },
    {
      "firstName" : "Stefaniya",
      "lastName" : "Mirya",
      "email" : "sf@pega.com",
      "phone" : "+49123412341234",
      "company" : "Other Company",
      "role": "Designer"
    },
    {
      "firstName" : "Irvine",
      "lastName" : "Dieu",
      "email" : "id@pega.com",
      "phone" : "+49123412341234",
      "company" : "Event Syst.",
      "role": "Event specialist"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
