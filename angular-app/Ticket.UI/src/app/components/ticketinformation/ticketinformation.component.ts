import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TicketModel} from "../../models/ticket.model";
import {EventsService} from "../../services/events.service";
import {EventModel} from "../../models/event.model";

@Component({
  selector: 'app-ticketinformation',
  templateUrl: './ticketinformation.component.html',
  styleUrls: ['./ticketinformation.component.css']
})
export class TicketinformationComponent {

  constructor(private http: HttpClient,private eventsService:EventsService) {

  }
  tickets: TicketModel[] = [];
  events:EventModel[]=[];
  baseApiUrl: string = environment.baseapiUrl;
  searchText: string = '';

  searchTickets(){
    this.tickets=[]
    this.http.get<TicketModel[]>(this.baseApiUrl + '/api/payments/' + this.searchText).subscribe({
      next: (ticketRequest) => {
        this.tickets=ticketRequest;
        this.loadEventDetailsForTickets()
      },error: (error) => {
        console.error('Error fetching tickets:', error);
        // Handle the error, e.g., display an error message to the user
      }
    });
  }
  loadEventDetailsForTickets() {
    for (const ticket of this.tickets) {
      // Make an HTTP request to fetch event data based on ticket.eventId
      this.eventsService.getEvent(ticket.ticketEventId).subscribe({
        next: (eventData) => {
          // Assign event data to the ticket
          this.events.push(eventData);
        },
        error: (error) => {
          console.error('Error fetching event data for ticket:', error);
          // Handle the error, e.g., display an error message to the user
        }
      });
    }
  }

}
