using System;
using System.Collections.Generic;

class Equipos{
    private const char V = '';
    private char v1;
    private char v2;
    private int v3;
    private DateTime dateTime;
    private char v4;

    public string Nombre {get; set;}
    public string Ciudad {get; set;}
    public int Socios {get; set;}
    public DateTime Fundacion {get; set;}
    public string Escudo {get; set;}
    
    public Equipos(string parNombre, 
                   string parCiudad,
                   int parSocios,
                   DateTime parFundacion,
                   string parEscudo){
      this.Nombre = parNombre;
      this.Ciudad = parCiudad;    
      this.Socios = parSocios;   
      this.Escudo = parEscudo;
      this.Fundacion  = parFundacion;      
    }

    public static IEnumerable<Equipos> getEquiposLit(){
        IEnumerable<Equipos> lstEquipos = new List<Equipos>() {
            new Equipos("Athletic CLub", "Bilbao", 44000, new DateTime(), null),
            new Equipos("F.C. Barcelona", "Barcelona", 98000, new DateTime(), null),
            new Equipos("R.Madrid", "Madrid", 85000, new DateTime(), null)
        };
        return lstEquipos;
    }

}