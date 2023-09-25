using Microsoft.AspNetCore.Mvc;
using TicketApp.EfCore;
using TicketApp.Repositories.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TicketApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsApiController : ControllerBase
    {
        private readonly IEventRepository eventRepository;

        public EventsApiController(IEventRepository ep)
        {
            this.eventRepository = ep;
        }
        

        // GET api/<EventsApiController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            Event ev= await eventRepository.GetById(id);

            return Ok(ev);
        }

        // GET api/events
        [HttpGet]
        public async Task<IActionResult> GetAllEvents()
        {
            var events = await eventRepository.GetAllEvents();
            return Ok(events);
        }

        // POST api/events
        [HttpPost]
        public async Task<IActionResult> CreateEvent([FromBody] Event newEvent)
        {
            
            if (newEvent == null)
            {
                return BadRequest(newEvent); // Invalid input
            }

            await eventRepository.CreateEvent(newEvent);
            return CreatedAtAction(nameof(Get), new { id = newEvent.Id }, newEvent);
        }

        // PUT api/events/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEvent(Guid id, [FromBody] Event updatedEvent)
        {
            if (id != updatedEvent.Id)
            {
                return BadRequest(); // Mismatched IDs
            }

            
            await eventRepository.UpdateEvent(id,updatedEvent);
            return Ok();
        }

        // DELETE api/events/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(Guid id)
        {
            var existingEvent = await eventRepository.GetById(id);
            if (existingEvent == null)
            {
                return NotFound(); // Event not found
            }

            await eventRepository.DeleteEvent(id);
            return NoContent();
        }



    }
}
