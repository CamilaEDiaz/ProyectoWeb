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

    public class CitaController : ControllerBase
    {
        private readonly Context cita_context;
         public CitaController(Context context)
        {
            cita_context = context;

            if(cita_context.Citas.Count()==0){
                cita_context.Citas.Add(new Cita{id=0 , dia= "02", mes="junio" , lugar= "Cafeteria", hora= "2:30pm"});
                cita_context.Citas.Add(new Cita{id=2 , dia="09" , mes="Julio" , lugar="cine", hora="3:30pm" });
                cita_context.SaveChanges();
            }
        }
        // GET: api/Cita
        [HttpGet]
          public async Task<ActionResult<IEnumerable<Cita>>> GetCita(){
                return await cita_context.Citas.ToListAsync();
            }

        [HttpGet("{id}")]
            public async Task<ActionResult<Cita>> Getcitas(int id)
            {
                var Cita = await cita_context.Citas.FindAsync(id);
                if(Cita== null){
                    return NotFound();
                }
                return Cita;
            }

        [HttpPost]
        public async Task<ActionResult<Cita>> PostCita(Cita NuevaCita){
              cita_context.Citas.Add(NuevaCita);
              await cita_context.SaveChangesAsync();
              return CreatedAtAction(nameof(GetCita), new {id=NuevaCita.id}, NuevaCita);
        }
    }
}