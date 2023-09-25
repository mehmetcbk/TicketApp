using TicketApp.EfCore;
using TicketApp.Model.Domain;
using TicketApp.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace TicketApp.Repositories.Implementation
{
    public class TicketRepository : ITicketRepository
    {

        private readonly EF_DataContext _DataContext;

        public TicketRepository(EF_DataContext dataContext)
        {
            _DataContext = dataContext;

        }

        public async Task CreateTicket(Ticket newTicket)
        {

            if (newTicket == null)
            {
                throw new ArgumentNullException(nameof(newTicket));
            }

            var existingTicket = await _DataContext.Tickets.FirstOrDefaultAsync(t => t.TicketName == newTicket.TicketName && t.TicketEventId == newTicket.TicketEventId);

            if (existingTicket == null)
            {
                // If no existing ticket found, add the new ticket
                _DataContext.Tickets.Add(newTicket);
            }
            else
            {
                // If an existing ticket with the same TicketName and TicketEventId is found, update its Amount
                existingTicket.Amount += newTicket.Amount;
                _DataContext.Tickets.Update(existingTicket);
            }
           

            await _DataContext.SaveChangesAsync();

        }

        public async Task<List<Ticket>> GetByName(string name)
        {

            List<Ticket> tickets = await _DataContext.Tickets
            .Where(t => t.TicketName == name)
            .ToListAsync();


            return tickets;

        }

        public async Task DeleteByName(string name)
        {

            Ticket ticket = await _DataContext.Tickets.FirstOrDefaultAsync(e => e.TicketName == name);
            if (ticket == null)
            {
                throw new ArgumentException("Ticket not found", nameof(name));
            }

            _DataContext.Tickets.Remove(ticket);
            await _DataContext.SaveChangesAsync();
            

        }


    }
}
