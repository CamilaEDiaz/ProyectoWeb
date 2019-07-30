using Microsoft.EntityFrameworkCore;
namespace ProyectWeb
{
public class Context : DbContext
{
public Context(DbContextOptions<Context> options) :
base(options)
{
}
public DbSet<Persona> Personas { get; set; }
public DbSet<Cita> Citas { get; set; }
}
}
