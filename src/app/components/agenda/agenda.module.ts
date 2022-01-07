import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './calendar/date/date.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DetailsComponent } from './calendar/details/details.component';


@NgModule({
  declarations: [CalendarComponent, DateComponent, DetailsComponent],
  imports: [
    CommonModule
  ]
})
export class AgendaModule { }
