(() => {
  let avenger: any = 123;
  //constantes tienen que ser inicializadas
  let exist;
  let power;

  avenger = "Dr Strangee";

  console.log((avenger as string).charAt(0)); //casteo tratalo como un string

  avenger = 150.23245;

  console.log(<number>avenger.toFixed(2));
})();
