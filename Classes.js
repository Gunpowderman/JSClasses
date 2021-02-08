class Superhero {
  constructor(name, race, mask) {
    this.name = name;
    this.race = race;
    this.mask = mask;
  }

  intro = () =>
    console.log(
      `${this.name} is classified as ${this.race}, and is ${this.mask}. `
    );
}

class Marvel extends Superhero {
  constructor(name, race, mask, brand) {
    super(name, race, mask);
    this.brand = "Marvel";
  }
  company = () =>
    console.log(`The superhero ${this.name} is owned by ${this.brand}.`);
}

class Dc extends Superhero {
  constructor(name, race, mask, brand) {
    super(name, race, mask);
    this.brand = "DC";
  }
  company = () =>
    console.log(`The superhero ${this.name} is owned by ${this.brand}.`);
}

const hero0 = new Marvel("Thor", "Asguardian", "unmasked");
const hero1 = new Marvel("Spiderman", "Human", "masked");
const hero2 = new Dc("Batman", "Human", "masked");
const hero3 = new Dc("Superman", "Kryptonian", "unmasked");

hero0.intro() + hero0.company();
hero1.intro() + hero1.company();
hero2.intro() + hero2.company();
hero3.intro() + hero3.company();
