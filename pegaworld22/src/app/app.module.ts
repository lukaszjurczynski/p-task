import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/agenda/calendar/calendar.component';
import { DateComponent } from './components/agenda/calendar/date/date.component';
import { DetailsComponent } from './components/agenda/calendar/details/details.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { AttendeesListComponent } from './components/attendees/attendees-list/attendees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    CalendarComponent,
    DateComponent,
    DetailsComponent,
    EventListComponent,
    AttendeesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
