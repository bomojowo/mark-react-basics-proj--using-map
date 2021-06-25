interface AnimalSound {
  animal: string;
  sound: string;
}

function animalSounds(arr: AnimalSound[]): string[] {
  let animal: AnimalSound = {
    animal: 'horse',
    sound: 'neigh'
  }
  let tellMeABoutAnimal = (element: AnimalSound) => `A ${element.animal} goes: "${element.sound}!"`
  console.log(tellMeABoutAnimal(animal))
  return arr.map(tellMeABoutAnimal);
}

export {animalSounds};