using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectWeb;
namespace ProyectWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly Context _context;
        
        public PersonaController(Context context)
        {
            _context = context;
            if(_context.Personas.Count()== 0){
                _context.Personas.Add(new Persona{id=1 , nombre= "Camila", apellido="Diaz", correo="camila@gmail.com", telefono= 5467, estatura= 1.65m, edad=20, colorDePiel= "blanca", colorDeOjos= "cafe", cabello= "mono" });
                 _context.Personas.Add(new Persona{id=13, nombre= "Jeferson", apellido="ruiz", correo="cjeferson@gmail.com", telefono= 333, estatura= 1.75m, edad=23, colorDePiel= "trigueño", colorDeOjos= "azul", cabello= "negro" });
            }
        }

        //GET : api/Persona
         [HttpGet]
          public async Task<ActionResult<IEnumerable<Persona>>> GetPersona(){
                return await _context.Personas.ToListAsync();
            }

             [HttpGet("{id}")]
            public async Task<ActionResult<Persona>> GetPersona(int id)
            {
                var persona = await _context.Personas.FindAsync(id);
                if(persona == null)
                {
                    return NotFound();
                }
                return persona;
            }

            [HttpPost]
        public async Task<ActionResult<Persona>> PostPersona(Persona NuevaPersona)
        {
            _context.Personas.Add(NuevaPersona);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new {id = NuevaPersona.id}, NuevaPersona);

        }

        /* [HttpPut("{id}")]
        public async Task<IActionResult> PutPersona(int id, Persona item)
        {
            if(id != item.id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }  */




    }
}