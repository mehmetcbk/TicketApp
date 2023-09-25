import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import {HttpClientModule} from "@angular/common/http";
import {TicketComponent} from "./components/ticket/ticket.component";
import { PaymentComponent } from './components/payment/payment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { EditeventComponent } from './components/editevent/editevent.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { TableeventComponent } from './components/tableevent/tableevent.component';
import { TicketinformationComponent } from './components/ticketinformation/ticketinformation.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TicketComponent,
    PaymentComponent,
    SuccessComponent,
    ErrorComponent,
    EditeventComponent,
    AddeventComponent,
    TableeventComponent,
    TicketinformationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
