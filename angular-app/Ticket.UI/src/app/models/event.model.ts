export interface EventModel {
  id:string
  eventId: string;
  eventTitle: string;
  eventDescription: string;
  eventPrice: number;
  eventVariations: string;
  eventImage: string;
  eventStartDate: Date;
  eventEndDate: Date;
  eventNumberOfTicketAvailable: number;
  eventCreatedById: string;
}
