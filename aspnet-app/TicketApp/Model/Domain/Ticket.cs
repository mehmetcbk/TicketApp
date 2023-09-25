using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TicketApp.Model.Domain
{

    [Table("tickets")]
    public class Ticket
    {
        [Key]
        public Guid TicketId { get; set; }
        public string TicketName { get; set; }
        public Guid TicketEventId { get; set; }

        public int Amount { get; set; }


    }
}
