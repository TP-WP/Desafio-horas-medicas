//VARIABLES
var radiologia = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];
var traumatologia = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];
var dental = [
  {
    HORA: "8:30",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];
//FUNCIONES
//se crea funcion para editar la tabla creada en el html.
//recibe como parametros un arreglo con los datos, una id de la tabla a editar, y un titulo para la tabla
function escribeTabla(arreglo, idTabla, titulo) {
  //primero creo una cadena de texto vacia, la cual voy a ir editando en la funcion
  let texto = ``;
  //entonces se crea el titulo y texto al comienzo de la tabla
  texto += `<caption><p>${titulo}</p>
  <p> Primera atención: ${arreglo[0].PACIENTE} - ${
    arreglo[0].PREVISION
  } | Última atención: ${arreglo[arreglo.length - 1].PACIENTE} - ${
    arreglo[arreglo.length - 1].PREVISION
  }</p></caption>`;
  //ahora se crea los table headers
  texto += `<tr>`;
  for (let i = 0; i < Object.keys(arreglo[0]).length; i++) {
    texto += `<th>${Object.keys(arreglo[0])[i]}</th>`;
  }
  texto += `</tr>`;
  //se rellenan los datos de la tabla
  for (let i = 0; i < arreglo.length; i++) {
    texto += `<tr>`;
    for (let j = 0; j < Object.values(arreglo[i]).length; j++) {
      texto += `<td>${Object.values(arreglo[i])[j]}</td>`;
    }
    texto += `</tr>`;
  }
  //finalmente se edita el html de la tabla con la variable texto creada anteriormente
  document.getElementById(idTabla).innerHTML = texto;
}
//OUTPUT // MAIN
//se llama entonces la funcion creada anteriormente con los parametros adecuados
escribeTabla(radiologia, "tabla-radiologia", "Radiologia");
escribeTabla(traumatologia, "tabla-traumatologia", "Traumatologia");
escribeTabla(dental, "tabla-dental", "Dental");
