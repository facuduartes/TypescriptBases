(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getNombre?: () => string;
  }; //no existe en JS

  let flash: Hero = {
    //ponemos el tipo de dato
    name: "Facundo",
    age: 24,
    powers: ["Super Velocidad", "Viajar en el tiempo"],
    getNombre() {
      return this.name;
    },
  };

  //   console.log(flash.getNombre());
})();
