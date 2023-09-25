import {Component, OnInit} from '@angular/core';
import {EventModel} from "../../models/event.model";
import {EventsService} from "../../services/events.service";


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  events: EventModel[]=[];

  constructor(private eventsService:EventsService) {
  }
  ngOnInit():void {
    this.eventsService.getAllEvents().subscribe({
      next:(e)=>{
        this.events = e;
        console.log(e)
      },error:(e)=>{
        console.log(e)
      }
    });

  }

}
