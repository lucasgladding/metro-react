interface Attributes {
  role: string;
  name: string;
  bio: string;
  birth: number;
  death?: number;
}

class Artist implements Attributes {
  role: string;
  name: string;
  bio: string;
  birth: number;
  death?: number;

  constructor(attributes: Attributes) {
    this.role = attributes.role;
    this.name = attributes.name;
    this.bio = attributes.bio;
    this.birth = attributes.birth;
    this.death = attributes.death;
  }

  get isDead(): boolean {
    return Boolean(this.death);
  }
}

export default Artist;

