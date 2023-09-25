using TicketApp.EfCore;

namespace TicketApp.Repositories.Interface
{
    public interface IEventRepository
    {
        Task<Event> GetById(Guid id);
        Task<Event> GetByEventId(string id);
        Task<List<Event>> GetAllEvents();


        Task CreateEvent(Event newEvent);


        Task UpdateEvent(Guid id,Event updatedEvent);


        Task DeleteEvent(Guid eventid);



    }
}
