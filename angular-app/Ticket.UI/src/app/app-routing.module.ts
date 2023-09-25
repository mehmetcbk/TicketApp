import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventComponent} from "./components/event/event.component";
import {TicketComponent} from "./components/ticket/ticket.component";
import {PaymentComponent} from "./components/payment/payment.component";
import {SuccessComponent} from "./components/success/success.component";
import {ErrorComponent} from "./components/error/error.component";
import {EditeventComponent} from "./components/editevent/editevent.component";
import {AddeventComponent} from "./components/addevent/addevent.component";

import {TableeventComponent} from "./components/tableevent/tableevent.component";
import {TicketinformationComponent} from "./components/ticketinformation/ticketinformation.component";
import {HomeComponent} from "./components/home/home.component";



const routes: Routes = [
  {
    path : '',
    component:HomeComponent,
  },
  {
    path : 'events',
    component:EventComponent,
  },
  {
    path : 'events/:id',
    component:TicketComponent,
  },
  {
    path : 'success',
    component:SuccessComponent,
  },
  {
    path : 'error',
    component:ErrorComponent,
  },
  {
    path : 'edit/:id',
    component:EditeventComponent,
  },
  {
    path : 'addevent',
    component:AddeventComponent,
  },
  {
    path : 'tableevents',
    component:TableeventComponent,
  },
  {
    path : 'ticketinformation',
    component:TicketinformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
