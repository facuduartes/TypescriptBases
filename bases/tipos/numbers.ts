(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log("problema");
  } else {
    console.log("Solucion");
  }

  avengers = Number("55A");
  //NaN es considerado un numero en js

  console.log({ avengers });
})();
//AUTOINVOCACION  , se encarga de encapsular el codigo por si hay variables con el mismo nombre en otra parte de la app
