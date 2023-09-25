using Microsoft.AspNetCore.Mvc;
using TicketApp.EfCore;
using TicketApp.Model.Domain;
using TicketApp.Repositories.Implementation;
using TicketApp.Repositories.Interface;
using TicketApp.Services;

namespace TicketApp.Controllers
{
    [ApiController]
    [Route("api/payments")]
    public class PaymentController : ControllerBase
    {
        private readonly PaymentService _paymentService;
        private readonly ITicketRepository _ticketRepository;

        public PaymentController(PaymentService paymentService,ITicketRepository tr)
        {
            _paymentService = paymentService;
            _ticketRepository = tr;
        }

        [HttpPost("make-payment")]
        public async Task<IActionResult> MakePayment([FromBody] PaymentRequest paymentRequest)
        {
            PaymentResult paymentResult = _paymentService.MakePayment(paymentRequest);

            if (paymentResult.Success)
            {
                Ticket ticket=new Ticket();
                ticket.TicketId = Guid.Empty;
                ticket.TicketName = paymentRequest.CardholderName;
                ticket.TicketEventId = paymentRequest.TicketId;
                ticket.Amount = 1;

                await _ticketRepository.CreateTicket(ticket);

                return Ok(ticket);
            }
            else
            {
                return BadRequest(paymentResult);
            }
        }

        // DELETE api/events/5
        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteTicket(string name)
        {
            var existingTicket = await _ticketRepository.GetByName(name);
            if (existingTicket == null)
            {
                return NotFound(); // Event not found
            }

            await _ticketRepository.DeleteByName(name);
            return NoContent();
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> Get(string name)
        {
            List<Ticket> tickets = await _ticketRepository.GetByName(name);

            if (tickets.Count == 0)
            {
                return NotFound();
            }

            return Ok(tickets);
        }



    }

    public class PaymentRequest
    {
        public string CardholderName { get; set; }
        public string CreditCardNumber { get; set; }
        public string ExpirationDate { get; set; }
        public string CVV { get; set; }
        public decimal Amount { get; set; }

        public Guid TicketId { get; set; }
    }
}
