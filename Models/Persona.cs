using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
//porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace ProyectWeb
{
public class Persona
{
[JsonProperty("id")]
public int id { get; set; }
[JsonProperty("nombre")]
public string nombre { get; set; }
[JsonProperty("apellido")]
public string apellido { get; set; }

[JsonProperty("correo")]
public string correo { get; set; }

[JsonProperty("telefono")]
public int telefono { get; set; }
[JsonProperty("estatura")]
public decimal estatura { get; set; }
[JsonProperty("edad")]
public int edad { get; set; }

[JsonProperty("colorDePiel")]
public string colorDePiel { get; set; }
[JsonProperty("colorDeOjos")]
public string colorDeOjos { get; set; }
[JsonProperty("cabello")]
public string cabello { get; set; }
}
}