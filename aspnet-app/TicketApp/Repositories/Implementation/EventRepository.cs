using Microsoft.EntityFrameworkCore;
using TicketApp.EfCore;
using TicketApp.Repositories.Interface;

namespace TicketApp.Repositories.Implementation
{
    public class EventRepository : IEventRepository
    {

        private readonly EF_DataContext _DataContext;

        public EventRepository(EF_DataContext dataContext)
        {
            this._DataContext = dataContext;
        }

        public async Task<Event> GetById(Guid id)
        {
            Event? ev = await _DataContext.Events.FirstOrDefaultAsync(e => e.Id == id);
            return ev;
        }

        public async Task<Event> GetByEventId(string eventid)
        {
            Event? ev = await _DataContext.Events.FirstOrDefaultAsync(e => e.EventId == eventid);

            return ev;

        }

        public async Task<List<Event>> GetAllEvents()
        {
            List<Event> events = await _DataContext.Events.ToListAsync();
            return events;
        }

        public async Task CreateEvent(Event newEvent)
        {
            if (newEvent == null)
            {
                throw new ArgumentNullException(nameof(newEvent));
            }

            _DataContext.Events.Add(newEvent);
            await _DataContext.SaveChangesAsync();
        }

        public async Task UpdateEvent(Guid id,Event updatedEvent)
        {
            if (updatedEvent == null)
            {
                throw new ArgumentNullException(nameof(updatedEvent));
            }
            var existingEvent = await GetById(id);

            if (existingEvent == null)
            {
                throw new ArgumentException("Event not found", nameof(id));
            }
            existingEvent.EventTitle = updatedEvent.EventTitle;
            existingEvent.EventId = updatedEvent.EventId;
            existingEvent.EventDescription = updatedEvent.EventDescription;
            existingEvent.EventPrice = updatedEvent.EventPrice;
            existingEvent.EventVariations = updatedEvent.EventVariations;
            existingEvent.EventImage = updatedEvent.EventImage;
            existingEvent.EventStartDate = updatedEvent.EventStartDate.ToUniversalTime();
            existingEvent.EventEndDate = updatedEvent.EventEndDate.ToUniversalTime();
            existingEvent.EventNumberOfTicketAvailable = updatedEvent.EventNumberOfTicketAvailable;
            existingEvent.EventCreatedById = updatedEvent.EventCreatedById;

           
            await _DataContext.SaveChangesAsync();
        }

        public async Task DeleteEvent(Guid id)
        {
            Event existingEvent = await _DataContext.Events.FirstOrDefaultAsync(e => e.Id == id);
            if (existingEvent == null)
            {
                throw new ArgumentException("Event not found", nameof(id));
            }

            _DataContext.Events.Remove(existingEvent);
            await _DataContext.SaveChangesAsync();
        }




    }
}
