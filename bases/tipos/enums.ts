(() => {
  enum AudioLevel {
    min = 8,
    medium,
    max = 10,
  }

  let currentAudio = AudioLevel.medium;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
