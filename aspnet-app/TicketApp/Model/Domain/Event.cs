using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TicketApp.EfCore
{
    [Table("event")]
    public class Event
    {
        [Key]
        public Guid Id { get; set; }

        public string EventId { get; set; }

        public string EventTitle { get; set; }

        public string EventDescription { get; set; }

        public int EventPrice { get; set; }

        public string EventVariations { get; set; }

        public string EventImage { get; set; }

        public DateTime EventStartDate { get; set; }

        public DateTime EventEndDate { get; set; }

        public int EventNumberOfTicketAvailable { get; set; }

        public string EventCreatedById { get; set; }

    }
}
