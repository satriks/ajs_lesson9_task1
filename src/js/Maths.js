export default class Maths {
  constructor(attack) {
    this.attack = attack;
  }

  set range(range) {
    this.isRange = range;
  }

  set stoned(value) {
    this.isStoned = value;
  }

  get stoned() {
    return this.damageHero() - Math.log2(this.isRange) * 5;
  }

  damageHero() {
    if (this.isRange > 5) {
      throw new Error('Слышком далеко');
    }
    if (this.isRange > 0) {
      return this.attack - (this.attack * 0.1 * (this.isRange - 1));
    }
    throw new Error('Что то не так в логике расчета урона');
  }

  get damage() {
    if (this.isStoned === true) {
      return this.stoned;
    }
    return this.damageHero();
  }
}
