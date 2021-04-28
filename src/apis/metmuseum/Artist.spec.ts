import Artist from './Artist';

describe('Artist', function () {
  it('checks whether an artist is dead', () => {
    const artist = new Artist({
      role: 'Artist',
      name: 'Antoni Gaudí i Cornet',
      bio: '',
      birth: 1852,
      death: 1926,
    });
    expect(artist.isDead).toEqual(true);
  });

  it('checks whether an artist is alive', () => {
    const artist = new Artist({
      role: 'Artist',
      name: 'Charles Thomas Close',
      bio: '',
      birth: 1940,
    });
    expect(artist.isDead).toEqual(false);
  });
});
