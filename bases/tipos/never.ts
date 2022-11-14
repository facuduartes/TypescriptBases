(() => {
  const error = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
    //no tiene un punto alcanzable
  };

  error("Auxilio");
})();
