using TicketApp.EfCore;
using TicketApp.Model.Domain;

namespace TicketApp.Repositories.Interface
{
    public interface ITicketRepository
    {
        Task<List<Ticket>> GetByName(string name);


        Task CreateTicket(Ticket newTicket);
        Task DeleteByName(string name);
    }
}
