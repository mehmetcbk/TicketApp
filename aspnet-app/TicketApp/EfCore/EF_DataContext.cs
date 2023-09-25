using Microsoft.EntityFrameworkCore;
using TicketApp.Model.Domain;

namespace TicketApp.EfCore
{
    public class EF_DataContext: DbContext
    {
        public EF_DataContext(DbContextOptions<EF_DataContext>options):base(options) { }

        public DbSet<Event> Events { get; set; }
        public DbSet<Ticket> Tickets { get; set; }

    }
}
