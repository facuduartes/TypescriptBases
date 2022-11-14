(() => {
  const hero: [string, number] = ["Dr Strange", 100];
  //   con una tupla respeta estrictamente el orden de los valores

  hero[0] = "Iron man";
  hero[1] = 100;
  console.log(hero);
})();
