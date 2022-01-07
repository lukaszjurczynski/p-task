import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  
  headers = ["Event name", "Lecturer", "Location", "Date", "Status", "Attendees"];
  events = [
    {
      "name" : "The Power to Simplify: What You Need to Crush Complexity",
      "lecturer" : "Sameera Kamal",
      "location" : "Online",
      "date" : "May 24, 2022 08:30am",
      "status" : "Scheduled",
      "attendees": "30/30"
    },
    {
      "name" : "StepChange: Embracing a Customer-first Vision to Simplify Service",
      "lecturer" : "Irmingard Theothelm",
      "location" : "Online",
      "date" : "May 24, 2022 08:30am",
      "status" : "Completed",
      "attendees": "29/30"
    },
    {
      "name" : "Real Value for Real Customers in Real Time",
      "lecturer" : "Elena Avice",
      "location" : "Online",
      "date" : "May 24, 2022 10:30am",
      "status" : "Scheduled",
      "attendees": "17/30"
    },
    {
      "name" : "Pfizer: Making Breakthroughs That Change Patients’ Lives",
      "lecturer" : "Liana Zlatan",
      "location" : "Online",
      "date" : "May 24, 2022 10:30am",
      "status" : "Canceled",
      "attendees": "7/30"
    },
    {
      "name" : "Narrowing Down and Widening Out: Making Interactions Count at Wells Fargo",
      "lecturer" : "Charita Carran",
      "location" : "Online",
      "date" : "May 24, 2022 12:30am",
      "status" : "Canceled",
      "attendees": "7/30"
    },
    {
      "name" : "Low-code Approach to Amazing Experiences",
      "lecturer" : "Paul Izabelle",
      "location" : "Online",
      "date" : "May 24, 2022 12:30am",
      "status" : "Scheduled",
      "attendees": "29/30"
    },
    {
      "name" : "What’s Next? 5 Tech Trends Shaping the Future",
      "lecturer" : "Clancy Sebastian",
      "location" : "Online",
      "date" : "May 24, 2022 14:30am",
      "status" : "Completed",
      "attendees": "26/30"
    },
    {
      "name" : "Pega 101: Overview of Pega’s Vision and Technologies",
      "lecturer" : "Proserpina Ahti",
      "location" : "Online",
      "date" : "May 24, 2022 14:30am",
      "status" : "Scheduled",
      "attendees": "10/30"
    },
    {
      "name" : "Intro to One-to-one Customer Engagement",
      "lecturer" : "Valerija Kristiyan",
      "location" : "Online",
      "date" : "May 24, 2022 16:30am",
      "status" : "Inprogress",
      "attendees": "10/30"
    },
    {
      "name" : "Intro to Pega Customer Service: Service, Simplified",
      "lecturer" : "Noelene Siward",
      "location" : "Online",
      "date" : "May 24, 2022 16:30am",
      "status" : "Scheduled",
      "attendees": "23/30"
    },
    {
      "name" : "Intro to Intelligent Automation: What Is It and Why Now?",
      "lecturer" : "Phoibe Sabri",
      "location" : "Online",
      "date" : "May 25, 2022 08:30am",
      "status" : "Scheduled",
      "attendees": "15/30"
    },
    {
      "name" : "Introducing Pega’s Digital Experience Framework: Big Outcomes via Low-Code UX",
      "lecturer" : "Sašo Rakel",
      "location" : "Online",
      "date" : "May 25, 2022 08:30am",
      "status" : "Scheduled",
      "attendees": "27/30"
    },
    {
      "name" : "Transforming Customer Engagement at Her Majesty's Revenue & Customs",
      "lecturer" : "Sašo Rakel",
      "location" : "Online",
      "date" : "May 25, 2022 10:30am",
      "status" : "Scheduled",
      "attendees": "22/30"
    },
    {
      "name" : "Pega Upgrades Made Easy",
      "lecturer" : "Xiomara Uxío",
      "location" : "Online",
      "date" : "May 25, 2022 10:30am",
      "status" : "Scheduled",
      "attendees": "09/30"
    },
    {
      "name" : "Health Data for Research: From 17 Months to 17 Seconds",
      "lecturer" : "Charita Carran",
      "location" : "Online",
      "date" : "May 25, 2022 12:30am",
      "status" : "Scheduled",
      "attendees": "09/30"
    },
    {
      "name" : "Playing to Win: Reimagination and Rapid Delivery of Aftersales Customer Journeys to Drive Navistar 4.0",
      "lecturer" : "Valerija Kristiyan",
      "location" : "Online",
      "date" : "May 25, 2022 12:30am",
      "status" : "Scheduled",
      "attendees": "19/30"
    },
    {
      "name" : "Modernizing for the Future: Digital Transformation at FedEx",
      "lecturer" : "Proserpina Ahti",
      "location" : "Online",
      "date" : "May 25, 2022 14:30am",
      "status" : "Completed",
      "attendees": "11/30"
    },
    {
      "name" : "Pega, Adobe, and Accenture: Delivering a Personalized CX, at Scale",
      "lecturer" : "Liana Zlatan",
      "location" : "Online",
      "date" : "May 25, 2022 14:30am",
      "status" : "Scheduled",
      "attendees": "11/30"
    },
    {
      "name" : "The Insider’s View on What It Takes for Successful Digital Transformation in CRM",
      "lecturer" : "Xiomara Uxío",
      "location" : "Online",
      "date" : "May 25, 2022 16:30am",
      "status" : "Scheduled",
      "attendees": "11/30"
    },{
      "name" : "Pega Knows What You Need - at Banco BHD Leon",
      "lecturer" : "Sameera Kamal",
      "location" : "Online",
      "date" : "May 26, 2022 08:30am",
      "status" : "Scheduled",
      "attendees": "11/30"
    },
    {
      "name" : "Leveraging Pega to Simplify the IT Landscape While Improving the Customer Experience",
      "lecturer" : "Irmingard Theothelm",
      "location" : "Online",
      "date" : "May 26, 2022 08:30am",
      "status" : "Scheduled",
      "attendees": "29/30"
    },
    {
      "name" : "Re-decisioning: The Rosetta Stone of Customer Relevance",
      "lecturer" : "Elena Avice",
      "location" : "Online",
      "date" : "May 26, 2022 10:30am",
      "status" : "Inprogress",
      "attendees": "17/30"
    },
    {
      "name" : "Digital Operations - making healthcare easier for Healthfirst members",
      "lecturer" : "Liana Zlatan",
      "location" : "Online",
      "date" : "May 26, 2022 10:30am",
      "status" : "Canceled",
      "attendees": "7/30"
    },
    {
      "name" : "Autonomous Service: What You Need to Know About the Next Big Wave in Service Strategy",
      "lecturer" : "Charita Carran",
      "location" : "Online",
      "date" : "May 26, 2022 12:30am",
      "status" : "Inprogress",
      "attendees": "7/30"
    },
    {
      "name" : "Digitization of Back-office: Automated Client Onboarding & KYC Reviews in Less Than Six Months",
      "lecturer" : "Paul Izabelle",
      "location" : "Online",
      "date" : "May 26, 2022 12:30am",
      "status" : "Scheduled",
      "attendees": "12/30"
    },
    {
      "name" : "Scotiabank’s Evolving Global Reuse Strategy – Forming the Business COE",
      "lecturer" : "Clancy Sebastian",
      "location" : "Online",
      "date" : "May 26, 2022 14:30am",
      "status" : "Scheduled",
      "attendees": "16/30"
    },
    {
      "name" : "Pega 101: Overview of Pega’s Vision and Technologies",
      "lecturer" : "Proserpina Ahti",
      "location" : "Online",
      "date" : "May 26, 2022 14:30am",
      "status" : "Scheduled",
      "attendees": "10/30"
    },
    {
      "name" : "Radical Simplification and Automation at Speed and Scale at Vodafone UK",
      "lecturer" : "Valerija Kristiyan",
      "location" : "Online",
      "date" : "May 26, 2022 16:30am",
      "status" : "Scheduled",
      "attendees": "10/30"
    },
    {
      "name" : "Pega Research Study: How Real-Time Decisioning Works in the Real-World",
      "lecturer" : "Noelene Siward",
      "location" : "Online",
      "date" : "May 26, 2022 16:30am",
      "status" : "Scheduled",
      "attendees": "23/30"
    }
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
