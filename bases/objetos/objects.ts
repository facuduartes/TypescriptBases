(() => {
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getNombre?: () => string;
  } = {
    //ponemos el tipo de dato
    name: "Facundo",
    age: 24,
    powers: ["Super Velocidad", "Viajar en el tiempo"],
  };

  flash = {
    name: "Clark",
    age: 50,
    powers: ["Super fuerza"],
    getNombre() {
      return this.name;
    },
  };

  console.log(flash);
})();
