interface ArtistAttributes {
  role: string;
  name: string;
  bio: string;
  birth: number;
  death?: number;
}

class Artist implements ArtistAttributes {
  role: string;
  name: string;
  bio: string;
  birth: number;
  death?: number;

  constructor(data: ArtistAttributes) {
    this.role = data.role;
    this.name = data.name;
    this.bio = data.bio;
    this.birth = data.birth;
    this.death = data.death;
  }

  get isDead(): boolean {
    return Boolean(this.death);
  }
}

export default Artist;

