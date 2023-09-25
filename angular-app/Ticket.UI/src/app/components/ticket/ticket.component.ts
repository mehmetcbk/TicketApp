import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventsService} from "../../services/events.service";
import {EventModel} from "../../models/event.model";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  eventDetails:EventModel={
    id:"",
    eventId: '0',
    eventTitle: '0',
    eventDescription: '0',
    eventPrice: 1,
    eventVariations: '0',
    eventImage: '',
    eventStartDate: new Date('0'),
    eventEndDate: new Date('0'),
    eventNumberOfTicketAvailable: 0,
    eventCreatedById: '0',
  }
  constructor(private route:ActivatedRoute,private eventsService:EventsService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id= params.get("id");
        if(id){
          this.eventsService.getEvent(id).subscribe({
            next:(response)=>{
              this.eventDetails=response;
              console.log(this.eventDetails);
            }
          });
        }
      }
    })
  }
}
