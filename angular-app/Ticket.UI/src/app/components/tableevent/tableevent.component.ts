import {Component} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {EventModel} from "../../models/event.model";

@Component({
  selector: 'app-tableevent',
  templateUrl: './tableevent.component.html',
  styleUrls: ['./tableevent.component.css']
})
export class TableeventComponent {
  events: EventModel[] = [];

  constructor(private eventsService: EventsService) {
  }

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe({
      next: (e) => {
        this.events = e;
        console.log(e)
      }, error: (e) => {
        console.log(e)
      }
    });
  }

  editEvent(event: EventModel) {
    // Implement the edit functionality here
    console.log('Edit event:', event);

  }

  deleteEvent(event: EventModel) {
    // Implement the delete functionality here
    console.log('Delete event:', event);
    this.eventsService.deleteEvent(event.id).subscribe({
      next: (res) => {
        this.events = this.events.filter((e) => e.id !== event.id);
        console.log(res)
      }, error: (e) => {
        console.log(e);
      }
    });
  }


}
