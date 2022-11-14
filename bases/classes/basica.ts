(() => {
  class Avenger {
    // private name: string,
    // private team: string,
    // public realName: string
    static avgAge: number = 34;
    // constructor(name:string,team:string,realName?:string){
    //     this.name=name
    //     this.team=team
    //     this.realName=realName
    // }
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
    //AL SER ESTATICO PUEDO ACCEDER A ESA PROP SIN CREAR UNA ISNTANCIA DE LA CLASE
    // HAGO REFERENCIA A LA CLASE UNICAMENTE
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  console.log(antman);
  console.log(Avenger.avgAge);
})();
