using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
//porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace ProyectWeb
{
public class Cita
{
[JsonProperty("id")]
public int id { get; set; }
[JsonProperty("dia")]
public string dia { get; set; }
[JsonProperty("mes")]
public string mes { get; set; }
[JsonProperty("lugar")]
public string lugar { get; set; }
[JsonProperty("hora")]
public string hora { get; set; }
}
}