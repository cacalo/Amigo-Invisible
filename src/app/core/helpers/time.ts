export function howLongFromPastDate(pastDate: Date | string,short=false):string{
  let date: Date;
  if(typeof pastDate === "string"){
    date = new Date(pastDate)
  } else {
    date = pastDate
  }
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let intervalo = seconds / 31536000;
  if (intervalo > 1) {
    if (intervalo < 2) return !short ? "Hace un año" : "1 y";
    return "Hace " + Math.floor(intervalo) + (!short ? " años" : " y");
  }

  intervalo = seconds / 2592000;
  if (intervalo > 1) {
    if (intervalo < 2) return !short ? "Hace un año" : "1 m";
    return "Hace " + Math.floor(intervalo) + (!short ? " meses" : " m");
  }

  intervalo = seconds / 86400;
  if (intervalo > 1) {
    if (intervalo < 2) return !short ? "Ayer" : "1 d";
    return "Hace " + Math.floor(intervalo) + (!short ? " días" : " d");
  }

  intervalo = seconds / 3600;
  if (intervalo > 1) {
    if (intervalo < 2) return !short ? "Hace una hora" : "1 h";
    return "Hace " + Math.floor(intervalo) + (!short ? " horas" : " h");
  }

  intervalo = seconds / 60;
  /*if (intervalo > 1) {
    if (intervalo < 2) return !short ? "Hace 1 minuto" : "1 m";
    return "Hace " + Math.floor(intervalo) + (!short ? " minutos" : " mm");
  }*/
  return (!short ? "Ahora" : "Ahora");
}
