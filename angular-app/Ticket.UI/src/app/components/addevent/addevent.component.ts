import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventsService} from "../../services/events.service";
import {EventModel} from "../../models/event.model";

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent {

  eventForm: FormGroup; // Declare a FormGroup for handling the form

  constructor(private formBuilder: FormBuilder,private eventsService:EventsService) {
    // Initialize the form with form controls and validation
    this.eventForm = this.formBuilder.group({
      eventTitle: ['', Validators.required],
      eventDescription: ['', Validators.required],
      eventPrice: [0, [Validators.required, Validators.min(0)]],
      eventStartDate: ['', Validators.required],
      eventEndDate: ['', Validators.required],
      eventNumberOfTicketAvailable: [0, [Validators.required, Validators.min(0)]],
      eventImage: [''],
    });
  }

  // Function to submit the form data
  onSubmit() {

    if (this.eventForm.valid) {
      // Send the form data to backend API
      const formData = this.eventForm.value;
      const startDate = new Date(formData.eventStartDate);//to send date format
      const endDate = new Date(formData.eventEndDate);//to send date format
      const newEvent: EventModel = {
        eventId:"",
        eventVariations:"",
        eventCreatedById:"",
        id: "00000000-0000-0000-0000-000000000000",
        eventTitle: formData.eventTitle,
        eventDescription: formData.eventDescription,
        eventPrice: formData.eventPrice,
        eventStartDate: startDate,
        eventEndDate: endDate,
        eventNumberOfTicketAvailable: formData.eventNumberOfTicketAvailable,
        eventImage: formData.eventImage,
      };

      console.log(newEvent)
      // Call the createEvent method from the EventsService to add the event
      this.eventsService.createEvent(newEvent).subscribe(
        (response) => {
          console.log('Event added successfully:', response);
          // Handle success, e.g., navigate to a different page
        },
        (error) => {
          console.error('Error adding event:', error);
          // Handle error
        }
      );
    } else {
      // Handle form validation errors
      console.log('Form contains validation errors.');
    }
  }
}
